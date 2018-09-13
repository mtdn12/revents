import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {ConnectedRouter } from 'react-router-redux'
import Immutable from 'immutable'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'

import './index.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import ScrollToTop from './utils/ScrollToTop'

const initialState = Immutable.Map()
const history = createHistory()
const rootEl = document.getElementById('root')

const init = async() => {
  const store = await configureStore(initialState, history)
  const render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter  history={history}>
          <ScrollToTop>
            <ReduxToastr 
              position="bottom-right"
              transitionIn="fadeIn"
              transitionOut='fadeOut'
            />
            <App />
          </ScrollToTop>
        </ConnectedRouter >
      </Provider>
    , rootEl)
  }
  if(module.hot){
    module.hot.accept('./components/App',()=>{
      setTimeout(render)
    })
  }
  render()
}
init()
registerServiceWorker();
