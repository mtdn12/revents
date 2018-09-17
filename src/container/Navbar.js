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
import { setModal } from '../modules/modals/actions'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

import NavBar from '../components/organisms/NavBar'

class NavBarContainer extends Component {
  handleSignOut =() => {
    this.props.firebase.logout()
    this.props.history.push('/')
  }
  render() {
    return (
       <NavBar  
          handleSignOut = {this.handleSignOut}
          { ...this.props } />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
})

const mapDispatchToProps = dispatch => ({
  handleOpenModal : (type, props) => dispatch(setModal(type, props))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)


export default compose(withConnect, withFirebase, withRouter)(NavBarContainer)