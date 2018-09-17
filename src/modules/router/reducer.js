import { ActionHandler } from './actions'
import createReducer from '../../utils/createReducer'

const initialState = {
  location: {
    location: {},
    action:''
  },
}

export default createReducer(initialState, ActionHandler)