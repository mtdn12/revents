import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */
// Create event
const CREATE_EVENT_REQUEST = 'event/CREATE_EVENT_REQUEST'
const CREATE_EVENT_SUCCESS = 'event/CREATE_EVENT_SUCCESS'
const CREATE_EVENT_FAILURE = 'event/CREATE_EVENT_FAILURE'
//update event
const UPDATE_EVENT_REQUEST = 'event/UPDATE_EVENT_REQUEST'
const UPDATE_EVENT_SUCCESS = 'event/UPDATE_EVENT_SUCCESS'
const UPDATE_EVENT_FAILURE = 'event/UPDATE_EVENT_FAILURE'
// Delete event
const DELETE_EVENT_REQUEST = 'event/DELETE_EVENT_REQUEST'
const DELETE_EVENT_SUCCESS = 'event/DELETE_EVENT_SUCCESS'
const DELETE_EVENT_FAILURE = 'event/DELETE_EVENT_FAILURE'


export const CONSTANTS = {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  // update
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  // delete
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE
}

/**
 * Actions creator
 */

 export const requestCreateEvent = event => ({
   type: CREATE_EVENT_REQUEST,
   payload: {
     event,
   }
 })

 export const requestUpdateEvent = event => ({
   type: UPDATE_EVENT_REQUEST,
   payload: {
     event
   }
 })

 export const requestDeleteEvent = eventId => ({
   type: DELETE_EVENT_REQUEST,
   payload: {
    eventId,
   }
 })


 export const ActionHandler = {
  [CREATE_EVENT_REQUEST]: (state, action) => pipe([mutators.addEvent(action)], state),
  [UPDATE_EVENT_REQUEST]: (state, action) => pipe([mutators.updateEvent(action)], state),
  [DELETE_EVENT_REQUEST]: (state, action) => pipe([mutators.deleteEvent(action)], state)
 }