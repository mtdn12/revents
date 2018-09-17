import { LOCATION_CHANGE } from 'connected-react-router'
export const ActionHandler = {
  [LOCATION_CHANGE]: (state, action) => {    
    return {'location': action.payload}
  },
}
