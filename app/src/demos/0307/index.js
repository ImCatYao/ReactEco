import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import store from './rematch'

import { asyncComponent } from './asyncComponent'

const AsyncDashboard = asyncComponent(() => {
  return import('./Dashboard')
})

const AsyncLogin = asyncComponent(() => {
  return import('./Login')
})

const AsyncHome = asyncComponent(() => {
  return import('./Home')
})

export default class ReachRouterAuthDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AsyncHome path="/" />
          <AsyncDashboard path="dashboard" />
          <AsyncLogin path="login" />
        </Router>
      </Provider>
    )
  }
}
