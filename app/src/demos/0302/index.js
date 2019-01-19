import React, { Component } from 'react'
import { Router, Link } from "@reach/router"
import  _ from 'lodash'
import users from './users'

const generateRouterComp = (name, children) => {
  return () => (
    <div className="content">
      <h4 className="title">{name}</h4>
      {children ? <children></children> : null}
    </div>
  )
}

const Home = generateRouterComp('Home')
const Dashboard = generateRouterComp('Dashboard')
const User = ({userId}) => {
  const id = parseInt(userId)
  const user = _.find(users, {id})
  if(!user) {
    return (
      <div className="box">
        Did not find a user called {user.name}
      </div>
    )
  }
  return (
    <div className="box">
      <h6 className="is-size8"><strong>id</strong>: {user.id}</h6>
      <h6 className="is-size8"><strong>name</strong>:{user.name}</h6>
      <h6 className="is-size8"><strong>age</strong>: {user.age}</h6>
    </div>
  )
}

const UserList = (props) => (
  <React.Fragment>
    <h4 className="title">Users</h4>
    <ul className="container">
      {
        users.map(user => (
          <li key={user.id}><Link to={`${user.id}`}>{user.name}</Link></li>
        ))
      }
    </ul>
    {
      props.children
    }
  </React.Fragment>
)

const NotFound = generateRouterComp('NotFound')

export default class ReachRouterDemo extends Component {
  componentDidMount() {
    document.title = 'reach/router nested demo'
  }
  render() {
    return (
      <div className="ReachRouterDemo">
        <nav className="tabs is-left is-medium">
          <ul className="container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="user">Users</Link></li>
          </ul>
        </nav>
        <div className="box">
          <Router>
            <Home path="/" />
            <Dashboard path="dashboard" />
            <UserList path="user">
              <User path=":userId" />
            </UserList>
            <NotFound default></NotFound>
          </Router>
        </div>
      </div>
    )
  }
}
