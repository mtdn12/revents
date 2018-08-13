import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(<App />, rootEl)
}
if(module.hot){
  module.hot.accept('./components/App',()=>{
    setTimeout(render)
  })
}
render()

registerServiceWorker();
