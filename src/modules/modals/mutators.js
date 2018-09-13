import {fromJS} from 'immutable'

export const setModal = action => state =>
  {
  console.log(state.toJS())
  return state.set('currentModal', fromJS({
    modalType: action.payload.modalType,
    modalProps: action.payload.modalProps
  }))
}
export const clearModal = state => state.set('currentModal','')
