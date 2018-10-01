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
import {requestLogin, requestSocialLogin} from '../modules/auth/actions'

class LoginModalContainer extends Component {
  render() {    
    return (
       <LoginModal {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  formItem: state.auth.loginItem
})

const mapDispatchToProps = dispatch => ({
  handleCloseModal: () => dispatch(clearModal()),
  handleLogin: values => dispatch(requestLogin(values)),
  handleSocialLogin: provider => dispatch(requestSocialLogin(provider))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(LoginModalContainer)