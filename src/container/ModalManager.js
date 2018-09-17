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
import modalsReducer from '../modules/modals/reducer'
import modalsSaga from '../modules/modals/sagas'

import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const modalLookup = {
  LoginModal,
  RegisterModal,
}
class ModalManagerContainer extends Component {  
  render() {
    const { currentModal } = this.props
    if(currentModal) {
      const {modalType, modalProps} = currentModal
      const ModalComponent = modalLookup[modalType]
      return (
        <ModalComponent {...modalProps} />
      );   
    }else {
      return (<span></span>)
    }
    
  }
}

const mapStateToProps = state => ({
  currentModal: state.modals.currentModal
})

const mapDispatchToProps = dispatch => ({
  
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withEventReducer = withReducer({
  key: 'modals',
  reducer: modalsReducer
})
const withEventSaga = withSaga({
  key: 'modals',
  saga: modalsSaga
})

export default compose(withEventReducer, withConnect, withEventSaga)(ModalManagerContainer)