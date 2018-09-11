import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'
import {
  fromJS
} from 'immutable'

const initialState = fromJS({
  formItem: {
    id: "",
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
    category: '',
    description: '',
    venueLatLng:{}
  }
})

export default createReducer(initialState, ActionHandler)