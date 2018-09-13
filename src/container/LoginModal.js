import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  compose
} from 'redux'
import LoginModal from '../components/organisms/LoginModal'
import {clearModal} from '../modules/modals/actions'

class LoginModalContainer extends Component {  
  render() {    
    return (
       <LoginModal {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  formItem: state.getIn(['auth','loginItem'])
})

const mapDispatchToProps = dispatch => ({
  handleCloseModal: () => dispatch(clearModal())
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(LoginModalContainer)