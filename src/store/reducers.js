import {combineReducers} from 'redux-immutable'
import auth from '../modules/auth/reducer'
import router from '../modules/router/reducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

const createRootReducer = reducers => combineReducers({
  ...reducers,
  auth,
  router,
  toastr: toastrReducer,
})

export const injectReducer = (store , {key , reducer}) => {
  if(store.injectedReducers[key]){
    return
  }
  store.injectedReducers[key] = reducer
  store.replaceReducer(createRootReducer(store.injectedReducers))
}

export default createRootReducer