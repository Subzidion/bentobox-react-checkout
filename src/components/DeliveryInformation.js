import React, { Component } from 'react'

import AddressForm from './AddressForm'

let fulfillmentStyle = {
  display: 'block'
}

class DeliveryInformation extends Component {
  constructor() {
    super()
    this.state = {
      sameAddress: true
    }

    this.handleSameAddressChange = this.handleSameAddressChange.bind(this)
  }

   handleSameAddressChange(event) {
    this.setState({
      sameAddress: event.target.checked
    })
  }

  render() {
    return (
      <div id='fulfill-delivery' className='fulfillment-method' style={fulfillmentStyle}>
        <h2>Delivery Information</h2>
        <label className='checkbox-label' htmlFor='delivery_same_as_billing' id='add_delivery'>
          <input type='checkbox' name='delivery_same_as_billing' id='delivery_same_as_billing' checked={this.state.sameAddress} onChange={this.handleSameAddressChange}/>
          Delivery address is the same as billing address
        </label>
        { !this.state.sameAddress && <fieldset>
          <AddressForm />
        </fieldset> }
      </div>
    )
  }
}

export default DeliveryInformation
