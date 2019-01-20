import React, { Component } from 'react'
import Form, {   
  FormInputField,
  FormSelectField,
  FormCheckboxField
} from './Form'

import cities from './cities'

export default class UserLogin extends Component {
  state = {
    email: '',
    password: '',
    city: '',
    subscribe: true
  }

  doLogin = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  onChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    const type = e.target.type
    if(type === 'checkbox') {
      value = !!e.target.checked 
    }
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="UserSignUp box">
        <Form 
          onSubmit={this.doLogin}
          title={"Sign Up"}
        >
            <FormInputField
              name={'email'}
              value={this.state.email}
              type={'email'}
              label={'Email'}
              onChange={this.onChange}
            ></FormInputField>
            <FormInputField
              name={'password'}
              value={this.state.password}
              type={'password'}
              label={'Password'}
              onChange={this.onChange}
            ></FormInputField>
            <FormSelectField
              name={'city'}
              label={'Your City'}
              value={this.state.city}
              onChange={this.onChange}
              options={cities}
              plsSelectText={'Please select your city'}
            >
            </FormSelectField>
            <FormCheckboxField
              name={"subscribe"}
              value={this.state.subscribe}
              label={'Subscribe our news'}
              onChange={this.onChange}
            ></FormCheckboxField>
            <div className="field">
              <button className="button is-small" type="submit"><strong>Submit</strong></button>
            </div>
        </Form>
      </div>
    )
  }
}
