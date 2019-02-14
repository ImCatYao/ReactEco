import React from 'react'

const FormSubmitButton = (props) => {
  const { filedCssClasses  = '' } = props
  return (
    <div className={'field' + filedCssClasses}>
      <button className="button is-small">{props.children}</button>
    </div>
  )
}

export default FormSubmitButton
