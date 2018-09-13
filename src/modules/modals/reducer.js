import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'
import {
  fromJS
} from 'immutable'

const initialState = fromJS({
  currentModal: ''
})

export default createReducer(initialState, ActionHandler)