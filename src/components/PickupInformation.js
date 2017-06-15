import React, { Component } from 'react'

let fulfillmentStyle = {
  display: 'block'
}

class PickupInformation extends Component {
  render() {
    return (
      <div id='fulfill-pickup_only' className='fulfillment-method' style={fulfillmentStyle}>
          <h2>Pickup Information</h2>
          <div className='pickup-info'>
            <p>All items available for pickup at:</p>
            <p>BentoBox Store<br />210 Elizabeth Street, 3 Fl<br />New York, NY 10013<br />212-222-2222<br />4PM - 6PM</p>
          </div>
      </div>
    )
  }
}

export default PickupInformation
