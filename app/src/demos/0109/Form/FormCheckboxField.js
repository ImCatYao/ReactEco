import React from 'react'
import { PropTypes } from 'prop-types'

const FormCheckboxField = (props) => {
  const {
    name,
    label,
    onChange,
    value
  } = props
  return (
    <label className="FormCheckboxField field">
      <input type="checkbox" onChange={onChange} checked={value} name={name}/>
      <span className='is-size8'>{label}</span>
    </label>
  )
}

FormCheckboxField.propTypes = {
  name: PropTypes.string.isReuqired,
  label: PropTypes.string,
  onChange: PropTypes.func.isReuqired,
  value: PropTypes.string.isReuqired
}

export default FormCheckboxField
