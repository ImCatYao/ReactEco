import React, { Component } from 'react'
import { Router } from '@reach/router'
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import { Provider } from 'react-redux'
import store from './rematch'

export default class ReachRouterAuthDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home path="/" />
          <Dashboard path="dashboard" />
          <Login path="login" />
        </Router>
      </Provider>
    )
  }
}
