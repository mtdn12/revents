import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'

const initialState = {
  currentModal: ''
}

export default createReducer(initialState, ActionHandler)