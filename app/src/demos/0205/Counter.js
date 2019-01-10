import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import * as actions from './actions'

const Counter = (props) => {
  const {
    value,
    onIncrementOne,
    onDecrementOne
  } = props
  return (
    <div className="Counter has-text-centered">
      <h1 className="is-size4"><strong>{value}</strong></h1>
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

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrementOne: () => {
      dispatch(actions.incrementOne())
    },
    onDecrementOne: () => {
      dispatch(actions.decrementOne())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
