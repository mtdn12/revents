import moment from 'moment'
export const setFormItem = action => state =>({
  ...state,
  formItem: {
    id: action.payload.item.id,
    title: action.payload.item.title,
    date: action.payload.item.date && moment.unix(action.payload.item.date.seconds).format('YYYY MM DD'),
    city: action.payload.item.city,
    venue: action.payload.item.venue,
    hostedBy: action.payload.item.hostedBy,
    category: action.payload.item.category,
    description: action.payload.item.description,
    venueLatLng: action.payload.item.venueLatLng,
    cancelled: action.payload.item.cancelled,
  }
}) 
