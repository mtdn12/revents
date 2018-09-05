import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'
import {
  fromJS
} from 'immutable'

const initialState = fromJS({
  formItem: {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }
})

export default createReducer(initialState, ActionHandler)