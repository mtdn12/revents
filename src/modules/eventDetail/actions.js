import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */

const GET_EVENT_DETAIL_REQUEST = 'eventDetail/GET_EVENT_DETAIL_REQUEST'
const GET_EVENT_DETAIL_SUCCESS = 'eventDetail/GET_EVENT_DETAIL_SUCCESS'
const GET_EVENT_DETAIL_FAILURE = 'eventDetail/GET_EVENT_DETAIL_FAILURE'



export const CONSTANTS = {
  GET_EVENT_DETAIL_REQUEST,
  GET_EVENT_DETAIL_SUCCESS,
  GET_EVENT_DETAIL_FAILURE
}

/**
 * Actions creator
 */
export const requestEventDetail = id => ({
  type: GET_EVENT_DETAIL_REQUEST,
  payload:{
    id,
  }
})


 export const ActionHandler = {
  [GET_EVENT_DETAIL_SUCCESS]: (state, action) => pipe([mutators.setEvent(action)],state)
 }