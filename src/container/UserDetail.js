import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  compose
} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

import UserDetail from '../components/pages/UserDetail'

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

class UserDetailContainer extends Component {  
  render() {
    return (
       <UserDetail { ...this.props } />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.firebase.auth.isLoaded && state.firebase.auth,
  profile: state.firebase.profile.isLoaded && state.firebase.profile,
  photos: state.firestore.ordered.photos || []
})

const mapDispatchToProps = dispatch => ({
 
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)


export default compose(withConnect,firestoreConnect(auth =>query(auth)))(UserDetailContainer)