import {
  createStore,
  compose,
  applyMiddleware
} from "redux";
import {
  routerMiddleware,
  connectRouter,
} from 'connected-react-router'
// import {
//   routerMiddleware,
//   connectRouter
// } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createRootReducer from './reducers'
import authSaga from '../modules/auth/sagas'
import {
  getFirebase
} from 'react-redux-firebase'
import {
  getFirestore
} from 'redux-firestore'


import {
  reactReduxFirebase
} from 'react-redux-firebase'
import {
  reduxFirestore
} from 'redux-firestore'
import firebase from '../config/firebaseConfig'

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
}

const configureStore = (initialState, history) => {
  try {
    let store
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware, routerMiddleware(history)]
    let composeEnhancers = compose
    if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }

    store = createStore(
      connectRouter(history)(createRootReducer()),
      initialState,
      composeEnhancers(
        applyMiddleware(...middlewares),
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase))
    )


    store.runSaga = sagaMiddleware.run
    store.injectedReducers = {}
    store.injectedSagas = {}
    store.asyncSagas = []
    // Golbal sagas

    store.asyncSagas.push('auth')
    store.runSaga(authSaga, getFirebase, getFirestore)

    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(createRootReducer(store.injectedReducers))
      })
    }

    return store

  } catch (error) {
    console.log(error.message)
  }
}

export default configureStore