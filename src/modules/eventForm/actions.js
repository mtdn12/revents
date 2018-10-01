import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */
const SET_FORM_ITEM = 'eventForm/SET_FORM_ITEM'

const CLEAR_FORM_ITEM = 'eventForm/CLEAR_FORM_ITEM'

// Create Event

const CREATE_EVENT_REQUEST = 'eventForm/CREATE_EVENT_REQUEST'
const CREATE_EVENT_SUCCESS = 'eventForm/CREATE_EVENT_SUCCESS'
const CREATE_EVENT_FAILURE = 'eventForm/CREATE_EVENT_FAILURE'


export const CONSTANTS = {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
}

/**
 * Actions creator
 */
// set form item
export const setFormItem = item => ({
  type: SET_FORM_ITEM,
  payload: {
    item,
  }
})

export const requestCreateEvent = event => ({
  type: CREATE_EVENT_REQUEST,
  payload: {
    event
  }
})

export const clearFormItem = () => ({
  type: CLEAR_FORM_ITEM,
})


export const ActionHandler = {
  [SET_FORM_ITEM]: (state, action) => pipe([mutators.setFormItem(action)], state),
  [CLEAR_FORM_ITEM]: (state, action, initialState) => initialState
}