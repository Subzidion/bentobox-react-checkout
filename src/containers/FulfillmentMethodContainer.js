import React, { Component } from 'react'
import { connect } from 'react-redux'

import FulfillmentMethod from '../components/FulfillmentMethod'
import DeliveryInformation from '../components/DeliveryInformation'
import PickupInformation from '../components/PickupInformation'
import FulfillmentDetails from '../components/FulfillmentDetails'


const mapStateToProps = function(state) {
  return {
    fulfillmentMethod: state.fulfillmentMethod
  }
}

class FulfillmentMethodContainer extends Component {
  render() {
    if(this.props.fulfillmentMethod === 'delivery') {
      return (
        <div>
          <FulfillmentMethod />
          <DeliveryInformation />
          <FulfillmentDetails />
        </div>
      )
    }
    else if(this.props.fulfillmentMethod === 'pickup') {
      return (
        <div>
          <FulfillmentMethod />
          <PickupInformation />
          <FulfillmentDetails />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(FulfillmentMethodContainer)
