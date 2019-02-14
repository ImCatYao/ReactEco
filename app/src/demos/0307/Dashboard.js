import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'

const Dashboard = ({username, signOutAndClearCache}) => {
  return (
    <div className="box">
      <h2 className="title">Dashboard</h2>
      {
        username ? <p className="is-size4">Welcome!! <small><strong style={{color:'#00d1b2'}}>{username}</strong></small></p> : null
      }
      {
        username ? <p><Link to="/">home</Link><button className="button is-small" onClick={signOutAndClearCache}>sign out</button></p> : null
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = ( {user: { signOutAndClearCache } }, ownProps) => {
  return {
    signOutAndClearCache: signOutAndClearCache
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
