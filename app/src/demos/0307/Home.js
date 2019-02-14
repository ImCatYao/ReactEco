import React from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'

const Home = ({username}) => {
  return (
    <div className="box">
      <div className="title">
        {
          username ? <p>Welcome <strong style={{color:'#00d1b2'}}>{ username }</strong></p> : <h4>Welcome</h4>
        }
      </div>
      <div className="panel">
        To { username ? <Link to="dashboard">dashboard</Link> : <Link to="/login">login</Link> }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username
  }
}

export default connect(mapStateToProps, null)(Home)
