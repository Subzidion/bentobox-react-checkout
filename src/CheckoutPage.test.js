import React from 'react'
import ReactDOM from 'react-dom'
import CheckoutPage from './CheckoutPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CheckoutPage />, div)
})
