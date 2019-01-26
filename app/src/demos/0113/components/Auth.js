import React from 'react'
import * as utils from '../utils'

import * as constants from '../constants'

const Auth = (props) => {
  const username = utils.getCachedAuth()
  if(username) {
    return props.children(username)
  } else  {
    return (
      <div className="user-auth">
        <h1 style={{color: 'red'}}>{`You are not allowed to access to this page!`}</h1>
        <button className="button is-small" onClick={handleAuthRequest}><b>Request For Auth</b></button>
      </div>
    )
  }
}

const handleAuthRequest = () => {
  localStorage.setItem(constants.AUTH_NAME, true)
  window.location.reload()
}

export default Auth
