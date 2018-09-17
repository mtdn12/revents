export const clearPasswordItem = state =>({
  ...state,
  resetPasswordItem: {
    newPassword: '',
    confirmPassword: ''
  }
})

export const setPasswordItem = action => state => ({
  ...state,
  resetPasswordItem: {
    newPassword: action.payload.values.newPassword,
    confirmPassword: action.payload.values.confirmPassword
  }
})