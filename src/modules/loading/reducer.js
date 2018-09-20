import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'

const initialState = {
  loadings: {
    uploadImage: false,
  }
}

export default createReducer(initialState, ActionHandler)