import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckoutPage from './CheckoutPage'
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/:orderID/" component={CheckoutPage}/>
    </Switch>
  </Router>), document.getElementById('root'))
registerServiceWorker()
