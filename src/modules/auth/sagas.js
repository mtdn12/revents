import { takeLatest, call, put, all, take } from 'redux-saga/effects'
import { clearModal } from '../modals/actions'
import {clearPasswordItem} from '../setting/actions'
import {toastr} from 'react-redux-toastr'

import { CONSTANTS } from './actions'

function* loginEmailWorker(firebase, {payload}){
  try {    
    yield firebase.auth().signInWithEmailAndPassword(
      payload.values.email,
      payload.values.password)
    yield put({
      type: CONSTANTS.LOG_IN_SUCCESS
    })
    yield toastr.success('Login', 'Login Success')
    yield put(clearModal())
  } catch (error) {
    yield put({
      type: CONSTANTS.LOG_IN_FAILURE
    })
    yield toastr.error('Login', error.message)
  }
}

function* registerWorker(firebase, firestore, {payload}){
  try {
    let createdUser = yield firebase.auth().createUserWithEmailAndPassword(
      payload.values.email,
      payload.values.password
    )
    console.log(createdUser)
    // Update the auth profile
    yield createdUser.user.updateProfile({
      displayName: payload.values.name
    })
    // Create a new profile in firstore
    let newUser = {
      displayName: payload.values.name,
      createdAt: firestore.FieldValue.serverTimestamp(),      
    }
    yield firestore.set(`users/${createdUser.user.uid}`, {...newUser})
    yield toastr.success('Login', 'Login Success')
    yield put(clearModal())
  } catch (error) {
    yield put({
      type: CONSTANTS.REGISTER_FAILURE
    })
    yield toastr.error('Register', error.message)
  }
}
// Social login

function* SocialLoginWorker(firebase,firestore,{payload}){
  try {
    yield put(clearModal())
    let user = yield firebase.login({
      provider: payload.provider,
      type: 'popup'
    })
    if(user.additionalUserInfo.isNewUser){
      yield firestore.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firestore.FieldValue.serverTimestamp()   
      })
    }
  } catch (error) {
    yield put({
      type: CONSTANTS.SOCIAL_LOGIN_FAILURE
    })
    yield toastr.error('Social Login', error.message)
  }
}
// Reset password
function* resetPasswordWorker(firebase, firestore,{payload}){
  try {
    console.log(payload)
    const user = yield firebase.auth().currentUser
    yield user.updatePassword(payload.newPassword)
    yield put(clearPasswordItem())
    yield toastr.success('Reset password', 'Your password has been updated')
    
  } catch (error) {
    yield put({
      type: CONSTANTS.RESET_PASSWORD_FAILURE
    })
    yield toastr.error('Reset password', error.message)
  }
}

function* authWatcher(getFirebase, getFirestore) {
  const firebase = getFirebase()
  const firestore = getFirestore()
  yield all([
    takeLatest(CONSTANTS.LOG_IN_REQUEST, loginEmailWorker, firebase),
    takeLatest(CONSTANTS.REGISTER_REQUEST, registerWorker, firebase, firestore),
    takeLatest(CONSTANTS.SOCIAL_LOGIN_REQUEST, SocialLoginWorker, firebase, firestore),
    takeLatest(CONSTANTS.RESET_PASSWORD_REQUEST, resetPasswordWorker, firebase, firestore)
  ])
}

export default authWatcher
