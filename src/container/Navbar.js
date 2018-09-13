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

import NavBar from '../components/organisms/NavBar'

class NavBarContainer extends Component {
  render() {
    return (
       <NavBar { ...this.props } />
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.getIn('auth','isAuthenticated')
})

const mapDispatchToProps = dispatch => ({
  handleOpenModal : (type, props) => dispatch(setModal(type, props))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)


export default compose(withConnect)(NavBarContainer)