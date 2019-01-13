import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

const Stamp = ({ setStamp, stamp }) => {
  let stampLocalStr = (new Date(stamp)).toLocaleString()

  return (
    <div className="Stamp box">
      <p><span>Set stamp at <strong>{stampLocalStr}</strong></span> <button onClick={setStamp} className="button is-small"><strong>Set Stamp</strong></button></p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stamp: state.stamp
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setStamp: () => {
      dispatch(actions.setStamp())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stamp)
