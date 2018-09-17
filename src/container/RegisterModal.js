import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  compose
} from 'redux'
import RegisterModal from '../components/organisms/RegisterModal'
import {clearModal} from '../modules/modals/actions'
import {requestRegister, requestSocialLogin} from '../modules/auth/actions'

class RegisterModalContainer extends Component {  
  render() {    
    return (
       <RegisterModal {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  formItem: state.auth.registerItem
})

const mapDispatchToProps = dispatch => ({
  handleCloseModal: () => dispatch(clearModal()),
  handleRegister: values => dispatch(requestRegister(values)),
  handleSocialLogin: provider => dispatch(requestSocialLogin(provider))

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(RegisterModalContainer)