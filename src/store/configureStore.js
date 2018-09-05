import {
  createStore,
  compose,
  applyMiddleware
} from "redux";
import {routerMiddleware} from 'react-router-redux'
// import {
//   routerMiddleware,
//   connectRouter
// } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import {
  offline
} from "@redux-offline/redux-offline";
import defaultOfflineConfig from "@redux-offline/redux-offline/lib/defaults";
import {
  persist,
  persistAutoRehydrate,
  offlineStateLens
} from "redux-offline-immutable-config";
import {fromJS} from 'immutable'

import createRootReducer from './reducers'

const configureStore = (initialState, history) => new Promise((res, rej) => {
  try {
    let store
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware, routerMiddleware(history)]
    if (process.env.NODE_ENV !== 'production') {
      middlewares.push(require('redux-immutable-state-invariant').default())
    }
    const offlineConfig = {
      ...defaultOfflineConfig,
      offlineStateLens,
      persist,
      persistAutoRehydrate,
      persistOptions: {
        blacklist: ['router'],
      },
      persistCallback: () => res(store),
    }
    const enhancers = [offline(offlineConfig)] 
    let composeEnhancers = compose
    if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
    store = createStore(
      createRootReducer(),      
      initialState,
      composeEnhancers(applyMiddleware(...middlewares), ...enhancers)
    )

    store.runSaga = sagaMiddleware.run
    store.injectedReducers = {}
    store.injectedSagas = {}
    store.asyncSagas = []

    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(createRootReducer(store.injectedReducers))
      })
    }
  } catch (error) {
    rej(error)
  }
})

export default configureStore