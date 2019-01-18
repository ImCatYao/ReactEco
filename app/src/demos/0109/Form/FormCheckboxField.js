import React, { Component } from 'react'

export default class FormCheckboxField extends Component {
  render() {
    const {
      name,
      label,
      onChange,
      value
    } = this.props
    return (
      <label className="FormCheckboxField field">
        <input type="checkbox" onChange={onChange} checked={value} name={name}/>
        <span className='is-size8'>{label}</span>
      </label>
    )
  }
}
