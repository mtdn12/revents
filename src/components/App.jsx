import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import EventDashboard from '../container/EventDashboard'
import Home from './pages/Home'
import EventDetail from '../container/EventDetail'
import SettingDashboard from './pages/SettingDashboard'
import UserDetail from './pages/UserDetail'
import EventForm from '../container/EventForm'
import PeopleDashboard from './pages/PeopleDashboard'
import ModalManager from '../container/ModalManager'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalManager />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/events" component={EventDashboard}/>
          <Route path="/event/:id" component={EventDetail}/>
          <Route path="/manage/:id" component={EventForm}/>
          <Route path="/people" component={PeopleDashboard}/>
          <Route path="/profile/:id" component={UserDetail}/>
          <Route path="/settings" component={SettingDashboard}/>
          <Route path="/create-event" component={EventForm}/>
        </Switch>        
      </div>
    )
  }
}
export default App

