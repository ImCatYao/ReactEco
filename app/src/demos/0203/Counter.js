import React from 'react'
import { PropTypes } from 'prop-types'

const Counter = (props) => {
  const {
    value,
    onIncrementOne,
    onDecrementOne
  } = props
  return (
    <div className="Counter">
      <h1 className="is-size4">{value}</h1>
      <div className="button-group">
        <button className="button is-small" onClick={onIncrementOne}><strong>Increment One</strong></button>
        <button className="button is-small" onClick={onDecrementOne}><strong>Decrement One</strong></button>
      </div>
    </div>
  )
}

Counter.proptypes = {
  value: PropTypes.number.isRequired,
  onIncrementOne: PropTypes.func.isRequired,
  onDecrementOne: PropTypes.func.isRequired
}

export default Counter
