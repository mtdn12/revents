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
const TOGGLE_EVENT_REQUEST = 'event/TOGGLE_EVENT_REQUEST'
const TOGGLE_EVENT_SUCCESS = 'event/TOGGLE_EVENT_SUCCESS'
const TOGGLE_EVENT_FAILURE = 'event/TOGGLE_EVENT_FAILURE'


export const CONSTANTS = {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  // update
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  // delete
  TOGGLE_EVENT_REQUEST,
  TOGGLE_EVENT_SUCCESS,
  TOGGLE_EVENT_FAILURE
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

 export const requestToggleEvent = (cancelled, eventId) => ({
   type: TOGGLE_EVENT_REQUEST,
   payload: {
    cancelled,
    eventId,
   }
 })


 export const ActionHandler = {
  
 }