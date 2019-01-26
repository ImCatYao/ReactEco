import React, { Component } from 'react'
import Auth from './components/Auth';
import * as constants from './constants'

export default class AuthExample extends Component {
  render() {
    return (
      <Auth>
        {
          (username) => {
            return (
              <div className="AuthExample">
                <h1>Welcome! <strong style={{color: 'green'}}>{username}</strong></h1>
                <button className="button is-small" onClick={handleSignOut}><b>Sign Out</b></button>
              </div>
            )
          }
        }
      </Auth>
    )
  }
}

const handleSignOut = () => {
  localStorage.removeItem(constants.AUTH_NAME)
  window.location.reload()
}
