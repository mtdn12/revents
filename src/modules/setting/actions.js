import pipe from '../../utils/pipe'
import * as mutators from './mutators'

const CLEAR_PASSWORD_ITEM = 'setting/CLEAR_PASSWORD_ITEM'

const SET_PASSWORD_ITEM = 'setting/SET_PASSWORD_ITEM'

const UPDATE_PROFILE_REQUEST ='setting/UPDATE_PROFILE_REQUEST'
const UPDATE_PROFILE_SUCCESS = 'setting/UPDATE_PROFILE_SUCCESS'
const UPDATE_PROFILE_FAILURE = 'setting/UPDATE_PROFILE_FAILURE'

const UPLOAD_IMAGE_REQUEST = 'setting/UPLOAD_IMAGE_REQUEST'
const UPLOAD_IMAGE_SUCCESS = 'setting/UPLOAD_IMAGE_SUCCESS'
const UPLOAD_IMAGE_FAILURE = 'setting/UPLOAD_IMAGE_FAILURE'

const DELETE_IMAGE_REQUEST = 'setting/DELETE_IMAGE_REQUEST'
const DELETE_IMAGE_SUCCESS = 'setting/DELETE_IMAGE_SUCCESS'
const DELETE_IMAGE_FAILURE = 'setting/DELETE_IMAGE_FAILURE'

const SET_PROFILE_IMAGE_REQUEST = 'setting/SET_PROFILE_IMAGE_REQUEST'
const SET_PROFILE_IMAGE_SUCCESS = 'setting/SET_PROFILE_IMAGE_SUCCESS'
const SET_PROFILE_IMAGE_FAILURE = 'setting/SET_PROFILE_IMAGE_FAILURE'


/**
 * Constants
 */

 // add modal to current modal to show



export const CONSTANTS = {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,

  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,

  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE,

  SET_PROFILE_IMAGE_REQUEST,
  SET_PROFILE_IMAGE_SUCCESS,
  SET_PROFILE_IMAGE_FAILURE
}


/**
 * Actions creator
 */

 export const clearPasswordItem = () => ({
   type: CLEAR_PASSWORD_ITEM
 })

 export const setPasswordItem = values => ({
   type: SET_PASSWORD_ITEM,
   payload: {
     values,
   }
 })
 // update profile
 export const requestUpdateProfile = user => ({
   type: UPDATE_PROFILE_REQUEST,
   payload: {
     user
   }
 })
 // Upload image

 export const requestUploadImage = (payload, resolve) => ({
   type: UPLOAD_IMAGE_REQUEST,
   payload: {
     file: payload.file,
     fileName: payload.fileName,
     resolve,
   },
   
 })

 export const requestDeleteImage = photo => ({
   type: DELETE_IMAGE_REQUEST,
   payload: {
     photo
   }
 })

 export const requestSetProfileImage = photo => ({
   type: SET_PROFILE_IMAGE_REQUEST,
   payload: {
     photo,
   }
 })




 export const ActionHandler = {
  [CLEAR_PASSWORD_ITEM]: state => pipe([mutators.clearPasswordItem], state),
  [SET_PASSWORD_ITEM]: (state, action) => pipe([mutators.setPasswordItem(action)], state),
 }