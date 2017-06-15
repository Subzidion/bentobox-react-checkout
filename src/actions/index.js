import * as types from './ActionTypes'

export function selectFulfillmentMethod(method) {
  return {
    type: types.SELECT_FULFILLMENT_METHOD,
    fulfillmentMethod: method
  }
}
