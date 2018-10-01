import { takeLatest, call, put, all, select } from 'redux-saga/effects'

import { CONSTANTS } from './actions'
import { createNewEvent } from '../../utils/helpers'
import { clearFormItem } from '../eventForm/actions'
import {requestEventDetail} from '../eventDetail/actions'
import {push} from 'react-router-redux'
import moment from 'moment'
import {
  toastr
} from 'react-redux-toastr'
const getPhotoURL = state => state.firebase.profile.photoURL
const getEvent = state => state.eventDetail.event

function* createEventWorker(firebase,firestore, {payload}){
  try {    
    const user = firebase.auth().currentUser  
    const photoURL = yield select(getPhotoURL)
    delete payload.event.id    
    let event = createNewEvent(user, photoURL, payload.event)
    let createdEvent = yield firestore.add(`events`, event)
    yield firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`,{
      eventId: createdEvent.id,
      userUid: user.uid,
      eventDate: event.date,
      host: true
    })
    toastr.success('Create Event','Event has been created')
    yield  put(push(`/event/${createdEvent.id}`))  
  } catch (error) {
    yield put({
      type: CONSTANTS.CREATE_EVENT_FAILURE
    })
    toastr.error('Create Event', error.message)
  }
}

function* updateEventWorker(firestore, {payload}){
  try {
    const event = yield select(getEvent)
    if(event.date !== payload.event.date){
      payload.event.date = moment(payload.event.date).toDate()
    }
    yield firestore.update(`events/${payload.event.id}`, payload.event)
    yield  put(push(`/event/${payload.event.id}`))
    toastr.success('Update Event', 'Event has been updated') 
  } catch (error) {
    yield put({
      type: CONSTANTS.UPDATE_EVENT_FAILURE
    })
    toastr.error('Update Event', error.message)
  }
}

function* toggleEventWorker(firestore, {payload}){
  try {
    yield firestore.update(`events/${payload.eventId}`,{
      cancelled: payload.cancelled
    })    
    yield put(requestEventDetail(payload.eventId))    
  } catch (error) {
    yield put({
      type: CONSTANTS.TOGGLE_EVENT_FAILURE
    })
    toastr.error('Toggle event', error.message)
  }
}


function* eventWatcher(getFirebase, getFirestore ) {
  const firebase = getFirebase()
  const firestore = getFirestore()
  yield all([
    takeLatest(CONSTANTS.CREATE_EVENT_REQUEST, createEventWorker, firebase, firestore),
    takeLatest(CONSTANTS.UPDATE_EVENT_REQUEST, updateEventWorker, firestore),
    takeLatest(CONSTANTS.TOGGLE_EVENT_REQUEST, toggleEventWorker, firestore)
  ])
}

export default eventWatcher
