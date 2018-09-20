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
import {firestoreConnect} from 'react-redux-firebase'
import {requestResetPassword} from '../modules/auth/actions'
import {
  setPasswordItem,
  requestUpdateProfile, 
  requestUploadImage, 
  requestDeleteImage,
  requestSetProfileImage
} from '../modules/setting/actions'
import settingReducer from '../modules/setting/reducer'
import settingSaga from '../modules/setting/sagas'
import withReducer from '../utils/withReducer'
import withSaga from '../utils/withSaga'
import {bindActionToPromise} from '../utils/bindActionToPromise'

const query =({auth}) => {
  if(auth){
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{
        collection: 'photos'
      }],
      storeAs: 'photos'
    }
  ]
}else return []
}

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
  profile: state.firebase.profile.isLoaded && state.firebase.profile,
  auth: state.firebase.auth.isLoaded && state.firebase.auth,
  photos: state.firestore.ordered.photos || [],
  isUploadImage: state.loading.loadings.uploadImage
})

const mapDispatchToProps = dispatch => ({
 handleResetPassword: newPassword => dispatch(requestResetPassword(newPassword)),
 handleSetPasswordItem: values => dispatch(setPasswordItem(values)),
 handleUpdateProfile: user => dispatch(requestUpdateProfile(user)),
//  handleUploadImage: (file, fileName) => dispatch(requestUploadImage(file, fileName)),
 handleUploadImage: payload => {
   const handleUpload = bindActionToPromise(dispatch, requestUploadImage)
   return handleUpload(payload)
 },
 handleDeleteImage: photo => dispatch(requestDeleteImage(photo)),
 handleSetProfileImage: photo => dispatch(requestSetProfileImage(photo))
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

export default compose(
  withSettingReducer,
  withSettingSaga,
  withConnect,
  firestoreConnect(auth =>query(auth)))(SettingDashboardContainer)