import {
  combineReducers
} from 'redux'
import auth from '../modules/auth/reducer'
import router from '../modules/router/reducer'
import loading from '../modules/loading/reducer'
import {
  firebaseReducer
} from 'react-redux-firebase'
import {
  firestoreReducer
} from 'redux-firestore'
import {
  reducer as toastrReducer
} from 'react-redux-toastr'
import {
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const createRootReducer = reducers => combineReducers({
  ...reducers,
  auth: persistReducer({
    key: 'auth',
    storage
  }, auth),
  loading,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  router,
  toastr: toastrReducer,
})

export const injectReducer = (store, {
  key,
  reducer
}) => {
  if (store.injectedReducers[key]) {
    return
  }
  let PersistConfig = {
    key,
    storage,
  }
  if (key === 'setting') {
    store.injectedReducers[key] = reducer
  } else {
    store.injectedReducers[key] = persistReducer(PersistConfig, reducer)
  }
  store.replaceReducer(createRootReducer(store.injectedReducers))
}

export default createRootReducer