import { takeLatest, call, put, all, select } from 'redux-saga/effects'

import { CONSTANTS } from './actions'
import { setFormItem } from '../eventForm/actions'
import {push} from 'react-router-redux'
import {toastr} from 'react-redux-toastr'

const getOrdered = state => state.firestore.ordered

function* getEventDetailWorker(firestore,{payload}){
  try {
    yield firestore.get(`events/${payload.id}`)
    const ordered= yield select(getOrdered)
    const event =ordered.events.find(e => e.id === payload.id) || {}
    yield put({
      type: CONSTANTS.GET_EVENT_DETAIL_SUCCESS,
      payload: {
        event,
      }
    })
    yield put(setFormItem(event))
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_EVENT_DETAIL_FAILURE
    })
    toastr.error('Event Detail', error.message)
  }
}

function* eventDetailWatcher(getFirebase, getFirestore ) {
  const firebase = getFirebase()
  const firestore = getFirestore()
  yield all([
    takeLatest(CONSTANTS.GET_EVENT_DETAIL_REQUEST,getEventDetailWorker, firestore)
  ])
}

export default eventDetailWatcher
