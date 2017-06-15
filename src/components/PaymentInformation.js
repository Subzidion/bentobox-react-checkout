import React, { Component } from 'react'

class PaymentInformation extends Component {
  render() {
    return (
      <div>
        <h2>Payment Information</h2>
        <fieldset className='credit-card-form'>
          <input type='text' id='cc' placeholder='Card Number' />
          <div className='split'>
            <input type='text' id='expiry' placeholder='MM/YY' className='split-left last' />
            <input type='text' id='cvc' placeholder='CVC' className='split-right last' />
          </div>
        </fieldset>
      </div>
    )
  }
}

export default PaymentInformation
