import pipe from '../../utils/pipe'
import * as mutators from './mutators'


/**
 * Constants
 */
const SHOW_LOADING = 'loading/SHOW_LOADING'

const HIDE_LOADING = 'loading/HIDE_LOADING'


export const CONSTANTS = {

}

/**
 * Actions creator
 */
// set form item

export const showLoading  = name => ({
  type: SHOW_LOADING,
  payload: {
    name
  }
})

export const hideLoading = name => ({
  type: HIDE_LOADING,
  payload: {
    name
  }
})



export const ActionHandler = {
  [SHOW_LOADING]: (state, action) => pipe([mutators.showLoading(action)], state),
  [HIDE_LOADING]: (state, action) => pipe([mutators.hideLoading(action)], state)
}