import pipe from '../../utils/pipe'
import * as mutators from './mutators'

const CLEAR_PASSWORD_ITEM = 'setting/CLEAR_PASSWORD_ITEM'

const SET_PASSWORD_ITEM = 'setting/SET_PASSWORD_ITEM'
/**
 * Constants
 */

 // add modal to current modal to show



export const CONSTANTS = {
 
}


/**
 * Actions creator
 */

 export const clearPasswordItem = () => ({
   type: CLEAR_PASSWORD_ITEM
 })

 export const setPasswordItem = values => ({
   type: SET_PASSWORD_ITEM,
   payload: {
     values,
   }
 })


 export const ActionHandler = {
  [CLEAR_PASSWORD_ITEM]: state => pipe([mutators.clearPasswordItem], state),
  [SET_PASSWORD_ITEM]: (state, action) => pipe([mutators.setPasswordItem(action)], state)
 }