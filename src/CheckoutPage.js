import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import CheckoutReducer from './reducers'

import OrderSummary from './components/OrderSummary'
import BillingInformation from './components/BillingInformation'
import SpecialRequests from './components/SpecialRequests'
import PaymentInformation from './components/PaymentInformation'

import FulfillmentMethodContainer from './containers/FulfillmentMethodContainer'

import './CheckoutPage.css'

let buttonTextStyle = {
  display: 'inline'
}

const store = createStore(
  CheckoutReducer,
  applyMiddleware(thunkMiddleware)
)

class CheckoutPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='row'>
          <div className='column half'>
            <OrderSummary order={this.props.match.params.orderID}/>
          </div>
          <div className='column half'>
            <div className='billing'>
              <form id='billing_info'>
                <BillingInformation />
                <FulfillmentMethodContainer />
                <SpecialRequests />
                <PaymentInformation />
                <button type='submit' id='processOrder'>
                  <span style={buttonTextStyle}>Complete Purchase</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default CheckoutPage
