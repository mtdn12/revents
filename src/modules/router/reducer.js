import { fromJS } from 'immutable'

import { ActionHandler } from './actions'
import createReducer from '../../utils/createReducer'

const initialState = fromJS({
  location: null,
})

export default createReducer(initialState, ActionHandler)