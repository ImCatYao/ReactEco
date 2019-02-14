import React, { Component } from 'react'
import Form, { FormInputField, FormSubmitButton } from './Form'
import { connect } from 'react-redux'

import * as utils from './utils'
import { navigate, Link } from '@reach/router'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  static getDerivedStateFromProps(props, state) {
    if(props.username) {
      navigate('/dashboard')
    }
    return null
  }

  onChange = (e) => {
    const el = e.target
    this.setState({
      [el.name]: el.value
    })
  }

  doLogin = (e) => {
    e.preventDefault()
    const {
      username,
      password
    } = this.state
    if(utils.checkAuth(username, password)) {
      this.props.doLoginAndCacheInfo({
        username,
        password
      })
    } else {
      window.alert('username does not match password!')
    }
  }

  render() {
    return (
      <div className="box">
        <Form title="Login" onSubmit={this.doLogin}>
          <FormInputField type="text"  value={this.state.username} onChange={this.onChange} name="username" label="Username"></FormInputField>
          <FormInputField type="password"  value={this.state.password} onChange={this.onChange} name="password" label="Password"></FormInputField>
          <FormSubmitButton><strong>Submit</strong></FormSubmitButton>
          <div className="field"><Link to="/">home</Link></div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = ({ user: { doLoginAndCacheInfo } }, ownProps) => {
  return {
    doLoginAndCacheInfo: doLoginAndCacheInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
