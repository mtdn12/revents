import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'

const initialState = {
  resetPasswordItem: {
    newPassword: '',
    confirmPassword: ''
  }
}

export default createReducer(initialState, ActionHandler)