import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */
const SET_FORM_ITEM = 'formItem/SET_FORM_ITEM'


export const CONSTANTS = {

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


export const ActionHandler = {
  [SET_FORM_ITEM]: (state, action) => pipe([mutators.setFormItem(action)], state)
}