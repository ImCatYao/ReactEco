import React, { Component } from 'react'

class FormSelectField extends Component {
  render () {
    const {
      name,
      value,
      options,
      onChange,
      label,
      plsSelectText
    } = this.props
    return (
      <label className="FormSelectField field">
        <span className="label">{label}</span>
        <div className="control">
          <div className="select">
            <select name={name} id={name} value={value} onChange={onChange} placeholder={``}>
              <option value="">{plsSelectText || `Please select your ${name}`}</option>
              {
                options.map(optionItem => {
                  return (
                    <option value={optionItem.value} key={optionItem.value}>
                      {
                        optionItem.label
                      }
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </label>
    )
  }
}

export default FormSelectField
