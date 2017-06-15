import * as types from '../actions/ActionTypes'

export const initialState = {
  fulfillmentMethod: 'delivery'
}

export default function CheckoutReducer(state = initialState, action) {
  switch(action.type) {
    case types.SELECT_FULFILLMENT_METHOD:
      return Object.assign({}, state, {
        fulfillmentMethod: action.fulfillmentMethod
      })

    default:
      return state
  }
}
