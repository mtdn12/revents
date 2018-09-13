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

class RegisterModalContainer extends Component {  
  render() {    
    return (
       <RegisterModal {...this.props}/>
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

export default compose(withConnect)(RegisterModalContainer)