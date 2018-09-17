import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  compose
} from 'redux'
import SettingDashboard from '../components/pages/SettingDashboard'

import {requestResetPassword} from '../modules/auth/actions'
import {setPasswordItem} from '../modules/setting/actions'
import settingReducer from '../modules/setting/reducer'
import settingSaga from '../modules/setting/sagas'
import withReducer from '../utils/withReducer'
import withSaga from '../utils/withSaga'

class SettingDashboardContainer extends Component {  
  render() {    
    return (
       <SettingDashboard {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  resetPasswordItem: state.setting.resetPasswordItem,
  providerId: state.firebase.auth.isLoaded && state.firebase.auth.providerData[0].providerId,
})

const mapDispatchToProps = dispatch => ({
 handleResetPassword: newPassword => dispatch(requestResetPassword(newPassword)),
 handleSetPasswordItem: values => dispatch(setPasswordItem(values))
})

const withSettingReducer = withReducer({
  key: 'setting',
  reducer: settingReducer
})
const withSettingSaga = withSaga({
  key: 'setting',
  saga: settingSaga
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withSettingReducer,withSettingSaga,withConnect)(SettingDashboardContainer)