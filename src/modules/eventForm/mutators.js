import {fromJS} from 'immutable'

export const setFormItem = action => state =>  
   state.set('formItem', fromJS({
    id: action.payload.item.id,
    title: action.payload.item.title,
    date: action.payload.item.date,
    city: action.payload.item.city,
    venue: action.payload.item.venue,
    hostedBy: action.payload.item.hostedBy,
    category: action.payload.item.category,
    description: action.payload.item.description
   }))

  