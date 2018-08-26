const createReducer = (initialState, ActionHandler) => (currentState = initialState, action) =>{
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action, initialState) : currentState
}

export default createReducer