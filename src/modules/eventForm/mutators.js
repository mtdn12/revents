import {fromJS} from 'immutable'

export const setFormItem = action => state =>  
   state.set('formItem', fromJS({
    title: action.payload.item.title,
    date: action.payload.item.date,
    city: action.payload.item.city,
    venue: action.payload.item.venue,
    hostedBy: action.payload.item.hostedBy
   }))

  