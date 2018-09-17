import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  compose
} from 'redux'
import withReducer from '../utils/withReducer'
import withSaga from '../utils/withSaga'
import eventReducer from '../modules/event/reducer'
import eventSaga from '../modules/event/sagas'
import {firestoreConnect} from 'react-redux-firebase'
import {
  requestCreateEvent,
  requestUpdateEvent,
  requestDeleteEvent
} from '../modules/event/actions'
import EventDashboard from '../components/pages/EventDashboard'


class EventDashboardContainer extends Component {
  render() {
    return (
       <EventDashboard { ...this.props } />
    );
  }
}

const mapStateToProps = state => ({
  // events: state.event.events
  events: state.firestore.ordered.events || []
})

const mapDispatchToProps = dispatch => ({
  handleDeleteEvent: eventId => dispatch(requestDeleteEvent(eventId)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withEventReducer = withReducer({
  key: 'event',
  reducer: eventReducer
})
const withEventSaga = withSaga({
  key: 'event',
  saga: eventSaga
})

export default compose(
      firestoreConnect([{
        collection: 'events'
    }]),
    withEventReducer,
    withConnect,
    withEventSaga,   
    )(EventDashboardContainer)