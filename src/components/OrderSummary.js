import React, { Component } from 'react'

class OrderSummary extends Component {
  render() {
    return (
      <div>
        <h2>Order Summary</h2>
        <section id='order_summary'>
          <div className='item'>
            <strong className='amount'>3 x $30.00</strong>
            <strong>VEGETABLE SPRING ROLLS</strong>
          </div>
          <div className='details'>
            <strong>Subtotal <span id='order-subtotal' className='amount'>$90.00</span></strong>
            <strong>Pick Up Fee (5%) <span id='fulfillment-amount' className='amount'>$4.50</span></strong>
            <strong>Service Fee <span id='order-subtotal' className='amount'>$11.11</span></strong>
            <strong>Taxes <span id='order-taxes' className='amount'>$8.39</span></strong>
          </div>
          <hr />
          <strong className='total'>Total <span id='order-total' className='amount'>$114.00</span></strong>
        </section>
        <a className='back'>Go Back</a>
      </div>
    )
  }
}

export default OrderSummary
