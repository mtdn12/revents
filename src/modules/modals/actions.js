import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */

 // add modal to current modal to show

 const SET_CURRENT_MODAL = 'modals/SET_CURRENT_MODAL'
 const CLEAR_CURRENT_MODAL = 'modals/CLEAR_CURRENT_MODAL'

export const CONSTANTS = {
 
}
export const setModal = (modalType, modalProps) => ({
  type: SET_CURRENT_MODAL,
  payload: {
    modalType,
    modalProps
  }
})

export const clearModal = () => ({
  type: CLEAR_CURRENT_MODAL
})

/**
 * Actions creator
 */



 export const ActionHandler = {
  [SET_CURRENT_MODAL]: (state, action) => pipe([mutators.setModal(action)], state),
  [CLEAR_CURRENT_MODAL]: state => pipe([mutators.clearModal], state),
 }