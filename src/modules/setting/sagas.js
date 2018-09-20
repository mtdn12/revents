import {
  takeLatest,
  call,
  put,
  all,
  take
} from 'redux-saga/effects'
import moment from 'moment'
import {
  toastr
} from 'react-redux-toastr'

import {
  CONSTANTS
} from './actions'

import {showLoading, hideLoading} from '../loading/actions'

function* updateProfileWorker(firebase, {
  payload
}) {
  try {
    let user = payload.user
    if (user.birthDay) {
      user.birthDay = moment(user.birthDay).toDate()
    }
    yield firebase.updateProfile(user)
    yield toastr.success('Update profile', 'Update profile success')

  } catch (error) {
    yield put({
      type: CONSTANTS.UPDATE_PROFILE_FAILURE
    })
    yield toastr.error('Update profile', error.message)
  }
}

function* uploadImageworker(firebase, firestore, {
  payload, resolve
}) {
  try {
    const user = firebase.auth().currentUser;
    const path = `${user.uid}/user_images`
    const options = {
      name: payload.fileName
    }
    yield put(showLoading('uploadImage'))
    // Upload the file to firebase storage
    let uploadedFile = yield firebase.uploadFile(path, payload.file, null, options)
    console.log(uploadedFile)
    // get url of image
    let downloadURL = yield uploadedFile.uploadTaskSnapshot.ref.getDownloadURL()
    // get userdoc
    let userDoc = yield firestore.get(`users/${user.uid}`)
    console.log(userDoc)
    // check if user has photo, if not update profile with new image
    console.log(userDoc.data())
    if (!userDoc.data().photoURL) {
      yield firebase.updateProfile({
        photoURL: downloadURL
      })
      yield user.updateProfile({
        photoURL: downloadURL
      })
    }
    // add the new photo to photos collection    
    yield firestore.add({
      collection: 'users',
      doc: user.uid,
      subcollections: [{
        collection: 'photos'
      }]
    }, {
      name: payload.fileName,
      url: downloadURL
    })
    yield put({
      type: CONSTANTS.UPLOAD_IMAGE_SUCCESS
    })
    yield put(hideLoading('uploadImage'))
    payload.resolve('test promise here')
  } catch (error) {
    yield put({
      type: CONSTANTS.UPLOAD_IMAGE_FAILURE
    })
    yield toastr.error('Upload Image', error.message)
    yield put(hideLoading('uploadImage'))
  }
}

// Delete image

function* deleteImageWorker(firebase, firestore, {payload}){
  try {
    const photo = payload.photo
    const user = firebase.auth().currentUser
    yield firebase.deleteFile(`${user.uid}/user_images/${photo.name}`)
    yield firestore.delete({
      collection: 'users',
      doc: user.uid,
      subcollections: [{collection: 'photos', doc: photo.id}]
    })
    yield put({
      type: CONSTANTS.DELETE_IMAGE_SUCCESS
    })
    toastr.success('Delete image','Delete image success')
  } catch (error) {
    yield put({
      type: CONSTANTS.DELETE_IMAGE_FAILURE
    })
    toastr.error('Delete image',error.message)
  }
}

// Set profile image

function* setProfileImageWorker(firebase, {payload}){
  try {
    yield firebase.updateProfile({
      photoURL: payload.photo.url
    })
    yield put({
      type: CONSTANTS.SET_PROFILE_IMAGE_SUCCESS
    })
    yield toastr.success('Set profile', 'Set profile image success')
    yield({
      type: CONSTANTS.SET_PROFILE_IMAGE_SUCCESS
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.SET_PROFILE_IMAGE_FAILURE
    })
    toastr.error('Set profile', error.message)
  }
}

function* settingWatcher(getFirebase, getFirestore) {
  const firebase = getFirebase()
  const firestore = getFirestore()
  yield all([
    takeLatest(CONSTANTS.UPDATE_PROFILE_REQUEST, updateProfileWorker, firebase),
    takeLatest(CONSTANTS.UPLOAD_IMAGE_REQUEST, uploadImageworker, firebase, firestore),
    takeLatest(CONSTANTS.DELETE_IMAGE_REQUEST, deleteImageWorker, firebase, firestore),
    takeLatest(CONSTANTS.SET_PROFILE_IMAGE_REQUEST, setProfileImageWorker, firebase)
  ])
}

export default settingWatcher