import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'connected-react-router'

export const ActionHandler = {
  [LOCATION_CHANGE]: (state, action) => {
    return state.set('location', fromJS(action.payload))
  },
}
