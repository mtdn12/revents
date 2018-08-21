import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import EventDashboard from './pages/EventDashboard'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import SettingDashboard from './pages/SettingDashboard'
import UserDetail from './pages/UserDetail'
import EventForm from './pages/EventForm'
import PeopleDashboard from './pages/PeopleDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/events" component={EventDashboard}/>
          <Route path="/event/:id" component={EventDetail}/>
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

