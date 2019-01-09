import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'

export class Counter extends Component {
  render() {
    const value = this.props.value

    return (
      <div className='Counter'>
        <div className="desc"><h1 className="title">Counter <small>Redux, React-Redux </small></h1></div>
        <div className="content">
          <div className="main">
            <h1 className="value"> {value} </h1>
            <div className="button-group">
              <button className="button is-small" onClick={this.props.addOne}><strong>Add 1</strong></button>
              <button className="button is-small" onClick={this.props.minusOne}><strong>Minus 1</strong></button>
              <button className="button is-small" onClick={this.props.reset}><strong>Reset</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addOne: () => {
      dispatch(actions.addOne())
    },
    minusOne: () => {
      dispatch(actions.minusOne())
    },
    reset: () => {
      dispatch(actions.reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
