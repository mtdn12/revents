import createReducer from '../../utils/createReducer'
import {ActionHandler} from './actions'
import {fromJS} from 'immutable'

const initialState = fromJS({
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
})

export default createReducer(initialState, ActionHandler)