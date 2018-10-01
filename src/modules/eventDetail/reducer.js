import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'

const initialState = {
  event: {
    
  },
}

export default createReducer(initialState, ActionHandler)