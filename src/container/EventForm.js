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
import eventFormReducer from '../modules/eventForm/reducer'
import eventFormSaga from '../modules/eventForm/sagas'
import EventForm from '../components/pages/EventForm'
import {
  setFormItem
} from '../modules/eventForm/actions'
import {
  requestCreateEvent,
  requestUpdateEvent,
} from '../modules/event/actions'

class EventFormContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    if (!id) {
      const formItem = {
        id:'',
        title: "",
        date: "",
        city: "",
        venue: "",
        hostedBy: "",
        category: '',
        description: ''
      };
      this.props.handleSetFormItem(formItem)
    } else {}
  }
  componentDidUpdate(prevProps) { 
    if (prevProps.location.key !== this.props.location.key) {      
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
          description: ''
        };
        this.props.handleSetFormItem(formItem)
        this.forceUpdate()
      } else {}
    }
  }
  render() {
    return ( < EventForm { ...this.props } /> )
    }
  }

  const mapStateToProps = (state, ownsProps) => ({
    formItem: state.getIn(['eventForm', 'formItem'])
  })

  const mapDispatchToProps = dispatch => ({
    handleSetFormItem: item => dispatch(setFormItem(item))
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

  export default compose(withEventFormReducer, withConnect, withEventFormSaga)(EventFormContainer)