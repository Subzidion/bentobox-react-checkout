import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectFulfillmentMethod } from '../actions'

const mapStateToProps = function(state) {
  return {
    fulfillmentMethod: state.fulfillmentMethod
  }
}

class FulfillmentMethod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'delivery'
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>How would you like to receive your order?</h3>
        <div className='radio'>
          <label><input type='radio' value='delivery' checked={this.props.fulfillmentMethod==='delivery'} onChange={ (event, fulfillmentMethod) => this.props.onChange('delivery') } name='fulfillment_method' />Local Delivery</label>
        </div>
        <div className='radio'>
          <label><input type='radio' value='pickup' checked={this.props.fulfillmentMethod==='pickup'} onChange={ (event, fulfillmentMethod) => this.props.onChange('pickup') } name='fulfillment_method' />Local Pickup</label>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      onChange: (fulfillmentMethod) => {
        dispatch(selectFulfillmentMethod(fulfillmentMethod))
      }
    }
  })(FulfillmentMethod)
