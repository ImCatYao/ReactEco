import React, { Component } from 'react'
import { Router, Link } from "@reach/router"

const Dashboard = (props) => {
  return (
    <h4 className="title is-size4">Dashboard</h4>
  )
}

const Home = (props) => {
  return (
    <h4 className="title is-size4">Home</h4>
  )
}

export default class ReachRouterDemo extends Component {
  render() {
    return (
      <div className="ReachRouterDemo box">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Router>
          <Home path="/" />
          <Dashboard path="dashboard" />
        </Router>
      </div>
    )
  }
}
