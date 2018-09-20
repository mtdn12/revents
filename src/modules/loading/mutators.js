export const showLoading = action => state =>({
  ...state,
  loadings: {
    ...state.loadings,
    [action.payload.name]: true,
  }
})

export const hideLoading = action => state => ({
  ...state,
  loadings: {
    ...state.loadings,
    [action.payload.name]: false,
  }
})