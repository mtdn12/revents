export const setModal = action => state => {
  return {
    ...state,
    currentModal: {
      modalType: action.payload.modalType,
      modalProps: action.payload.modalProps,
    }
  }
}
export const clearModal = state => ({
  ...state,
  currentModal: ''
})