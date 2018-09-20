import moment from 'moment'

export const clearPasswordItem = state => ({
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

export const clearBasicItem = state => ({
  ...state,
  basicItem: {
    displayName: '',
    birthDay: '',
    homeTown: '',
    gender: '',
  }
})

export const setBasicItem = action => state => {
  const item = action.payload.item
  return {
    ...state,
    basicItem: {
      displayName: item.displayName || '',
      birthDay: (item.birthDay && moment(item.birthDay.toDate()).format('YYYY-MM-DD  HH:mm')) || '',
      homeTown: item.homeTown || '',
      gender: item.gender || ''
    }
  }
}