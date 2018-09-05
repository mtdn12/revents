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
import eventDetailReducer from '../modules/eventDetail/reducer'
import eventDetailSaga from '../modules/eventDetail/sagas'
import EventDetail from '../components/pages/EventDetail'
import {push} from 'react-router-redux'
import {
  setFormItem
} from '../modules/eventForm/actions'

class EventDetailContainer extends Component {
  handleSetManageForm = async item => {
    await this.props.handleSetFormItem(item)
    this.props.pushToEditForm(item.id)
  }
  render() {
    return ( <EventDetail { ...this.props } handleSetManageForm={this.handleSetManageForm} /> )
  }
}

const mapStateToProps = (state, ownsProps) => ({
  event: state.getIn(['eventDetail','event'])
})

const mapDispatchToProps = dispatch => ({
  handleSetFormItem: item => dispatch(setFormItem(item)),
  pushToEditForm: id => dispatch(push(`/manage/${id}`))
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

export default compose(withEventDetailReducer, withEventDetailSaga, withConnect)(EventDetailContainer)