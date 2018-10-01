import { takeLatest, call, put, all, select } from 'redux-saga/effects'

import { CONSTANTS } from './actions'
import {createNewEvent} from '../../utils/helpers'
import {
  toastr
} from 'react-redux-toastr'
const getPhotoURL = state => state.firebase.profile.photoURL

function* createEventWorker(firestore, {payload}){
  try {
    const user = firestore.auth().currentUser
    const photoURL = yield select(getPhotoURL)
    let event = createNewEvent(user, photoURL, payload.event)
    let createdEvent = yield firestore.add(`events`, event)
    yield firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`,{
      eventId: createdEvent.id,
      userUid: user.uid,
      eventDate: event.date,
      host: true
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.CREATE_EVENT_FAILURE
    })
    toastr.error('Create Event', error.message)
  }
}


function* eventFormWatcher(getFirebase, getFirestore ) {
  const firebase = getFirebase()
  const firestore = getFirestore()
  yield all([
    takeLatest(CONSTANTS.CREATE_EVENT_REQUEST, createEventWorker, firestore)
  ])
}

export default eventFormWatcher
