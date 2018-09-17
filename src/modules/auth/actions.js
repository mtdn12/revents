import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */
// Login with email and password
const LOG_IN_REQUEST = 'auth/LOG_IN_REQUEST'
const LOG_IN_SUCCESS = 'auth/LOG_IN_SUCCESS'
const LOG_IN_FAILURE = 'auth/LOG_IN_FAILURE'
// Register account
const REGISTER_REQUEST = 'auth/REGISTER_REQUEST'
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'
// Social log in
const SOCIAL_LOGIN_REQUEST = 'auth/SOCIAL_LOGIN_REQUEST'
const SOCIAL_LOGIN_SUCCESS = 'auth/SOCIAL_LOGIN_SUCCESS'
const SOCIAL_LOGIN_FAILURE = 'auth/SOCIAL_LOGIN_FAILURE'
// Reset password
const RESET_PASSWORD_REQUEST = 'auth/RESET_PASSWORD_REQUEST'
const RESET_PASSWORD_SUCCESS = 'auth/RESET_PASSWORD_SUCCESS'
const RESET_PASSWORD_FAILURE = 'auth/RESET_PASSWORD_FAILURE'




export const CONSTANTS = {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,

  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILURE,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
}

/**
 * Actions creator
 */
export const requestLogin = values => ({
  type: LOG_IN_REQUEST,
  payload: {
    values
  }
})

export const requestRegister = values => ({
  type: REGISTER_REQUEST,
  payload: {
    values
  }
})

export const requestSocialLogin = provider => ({
  type: SOCIAL_LOGIN_REQUEST,
  payload: {
    provider,
  }
})

export const requestResetPassword = newPassword => ({
  type: RESET_PASSWORD_REQUEST,
  payload: {
    newPassword,
  }
})


 export const ActionHandler = {
  
 }