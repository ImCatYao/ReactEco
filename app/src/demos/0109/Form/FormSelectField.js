import React from 'react'
import { PropTypes } from 'prop-types'

const FormSelectField = (props) => {
  const {
    name,
    value,
    options,
    onChange,
    label,
    plsSelectText
  } = props
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

FormSelectField.propTypes = {
  name: PropTypes.string.isReuqired,
  label: PropTypes.string,
  onChange: PropTypes.func.isReuqired,
  value: PropTypes.string.isReuqired,
  options: PropTypes.array.isReuqired,
  plsSelectText: PropTypes.string
}

export default FormSelectField
