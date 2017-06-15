import React from 'react'
import ReactDOM from 'react-dom'
import CheckoutPage from './CheckoutPage'
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<CheckoutPage />, document.getElementById('root'))
registerServiceWorker()
