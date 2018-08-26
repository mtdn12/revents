export const addEvent = action =>  state => {
  const events = state.get('events')
  const newEvents = events.concat(action.payload.event)
  return state.set('events', newEvents)
}

export const updateEvent = action => state => {
  const events = state.get('events')
  const newEvents = events.map(event => {
    if(event.get('id') === action.payload.event.id) return action.payload.event
    return event
  })
  return state.set('events', newEvents)
}

export const deleteEvent = action => state => {
  const events = state.get('events')
  const newEvents = events.filter(event => {
    if(event.get('id') === action.payload.eventId) return false
    return true
  })
  return state.set('events', newEvents)
}