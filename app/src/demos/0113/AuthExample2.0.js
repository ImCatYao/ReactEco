import React, { Component } from 'react'
import AuthV2 from './components/Auth2.0';
import * as constants from './constants'

export default class AuthExample extends Component {
  render() {
    return (
      <AuthV2
        nologin={() => {
          return (
            <div className="request-auth">
              <h1 style={{color: 'red'}}>{`You are not allowed to access to this page!`}</h1>
              <button className="button is-small" onClick={handleAuthRequest}><b>Request For Auth</b></button>
            </div>
          )
      }}
        login={
          (username) => {
            return (
              <div className="user-auth">
                <h1>Welcome, {username}</h1>
                <button className="button is-small" onClick={handleSignOut}><b>Sign Out</b></button>
              </div>
            )
          }
        }
      >
      </AuthV2>
    )
  }
}

const handleAuthRequest = () => {
  localStorage.setItem(constants.AUTH_NAME, 'Cat')
  window.location.reload()
}

const handleSignOut = () => {
  localStorage.removeItem(constants.AUTH_NAME)
  window.location.reload()
}
