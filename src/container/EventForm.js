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
import {
  withFirestore
} from 'react-redux-firebase'
import withSaga from '../utils/withSaga'
import eventFormReducer from '../modules/eventForm/reducer'
import eventFormSaga from '../modules/eventForm/sagas'
import EventForm from '../components/pages/EventForm'
import eventDetailReducer from '../modules/eventDetail/reducer'
import eventDetailSaga from '../modules/eventDetail/sagas'
import eventSaga from '../modules/event/sagas'
import {
  setFormItem
} from '../modules/eventForm/actions'
import {requestEventDetail} from '../modules/eventDetail/actions'
import {
  requestCreateEvent,
  requestUpdateEvent,
  requestToggleEvent,
} from '../modules/event/actions'

class EventFormContainer extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id
    if (!id) {
      const formItem = {
        id: '',
        title: "",
        date: "",
        city: "",
        venue: "",
        hostedBy: "",
        category: '',
        description: '',
        cancelled: ''
      };
      this.props.handleSetFormItem(formItem)
    } else {
      const {   
        match
      } = this.props
      this.props.handleRequestEventDetail(match.params.id)
    }
  }
  render() {
    return ( < EventForm { ...this.props } /> )
    }
  }

  const mapStateToProps = (state, ownsProps) => ({
    formItem: state.eventForm.formItem



  })

  const mapDispatchToProps = dispatch => ({
    handleSetFormItem: item => dispatch(setFormItem(item)),
    handleFormAction: event => {
     return event.id ? dispatch(requestUpdateEvent(event)) : dispatch(requestCreateEvent(event))
    },    
    handleRequestEventDetail : id => dispatch(requestEventDetail(id)),
    handleToggleEvent: (cancelled, id) => dispatch(requestToggleEvent(cancelled, id))
  })

  const withConnect = connect(mapStateToProps, mapDispatchToProps)
  const withEventFormReducer = withReducer({
    key: 'eventForm',
    reducer: eventFormReducer
  })
  const withEventFormSaga = withSaga({
    key: 'eventForm',
    saga: eventFormSaga
  })
  const withEventSaga = withSaga({
    key: 'event',
    saga: eventSaga
  })
  const withEventDetailReducer = withReducer({
    key: 'eventDetail',
    reducer: eventDetailReducer
  })
  const withEventDetailSaga = withSaga({
    key: 'eventDetail',
    saga: eventDetailSaga
  })

  export default compose(
    withEventDetailSaga,
    withEventDetailReducer,
    withEventFormReducer,
    withConnect,
    withEventFormSaga,
    withFirestore,  
    withEventSaga)(EventFormContainer)