import {  getFirebase } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
// const createRootSaga = (sagas = {}) => function* rootSaga() {
//   yield all([...Object.keys(sagas).map(key => sagas[key]())])
// }

export const injectSaga = (store, {
  key,
  saga
}) => {
  if (store.asyncSagas.includes(key)) return
  store.asyncSagas.push(key)
  store.injectedSagas = [...store.injectedSagas, saga]
  store.runSaga(saga, getFirebase, getFirestore)
}

// export default createRootSaga