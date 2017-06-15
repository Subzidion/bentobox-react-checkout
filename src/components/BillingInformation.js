import React, { Component } from 'react'

import AddressForm from './AddressForm'

class BillingInformation extends Component {
  render() {
    return (
      <div>
        <h2>Billing Information</h2>
        <fieldset>
          <AddressForm />
          <input type='text' name='billing_phone_number' placeholder='Phone number' />
          <input className='last' type='text' name='email' placeholder='Email address' />
        </fieldset>
      </div>
    )
  }
}

export default BillingInformation
