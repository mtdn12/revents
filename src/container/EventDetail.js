import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { withFirestore, withFirebase, actionTypes } from 'react-redux-firebase'
import {
  compose
} from 'redux'
import withReducer from '../utils/withReducer'
import withSaga from '../utils/withSaga'
import eventDetailReducer from '../modules/eventDetail/reducer'
import eventDetailSaga from '../modules/eventDetail/sagas'
import EventDetail from '../components/pages/EventDetail'
import {requestEventDetail} from '../modules/eventDetail/actions'
import {
  setFormItem
} from '../modules/eventForm/actions'

class EventDetailContainer extends Component {
  async componentDidMount(){
    this.props.handleGetEventDetail(this.props.match.params.id)
  } 
  render() {
    return ( <EventDetail { ...this.props } handleSetManageForm={this.handleSetManageForm} /> )
  }
}

const mapStateToProps = (state, ownsProps) => ({
  event: state.eventDetail.event
})

const mapDispatchToProps = dispatch => ({
  handleSetFormItem: item => dispatch(setFormItem(item)),
  handleGetEventDetail: id => dispatch(requestEventDetail(id)), 
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withEventDetailReducer = withReducer({
  key: 'eventDetail',
  reducer: eventDetailReducer
})
const withEventDetailSaga = withSaga({
  key: 'eventDetail',
  saga: eventDetailSaga
})

export default compose(
  withFirestore,
  withEventDetailReducer,
  withEventDetailSaga,
  withConnect, 
  withFirebase,
  )(EventDetailContainer)