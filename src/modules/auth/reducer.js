import createReducer from '../../utils/createReducer'
import {ActionHandler} from './actions'

const initialState = {
  auth: {},
  loginItem: {
    password: '',
    email: ''
  },
  registerItem: {
    name: '',
    email: '',
    password: ''
  },
  isAuthenticated: false
}

export default createReducer(initialState, ActionHandler)