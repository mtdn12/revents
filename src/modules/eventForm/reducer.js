import createReducer from '../../utils/createReducer'
import {
  ActionHandler
} from './actions'

const initialState = {
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
}

export default createReducer(initialState, ActionHandler)