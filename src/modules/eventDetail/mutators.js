export const setEvent = action => state => {
  return {
    ...state,
    event: action.payload.event
  }
}