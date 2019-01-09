import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    value: 0
  }

  addOne = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      }
    })
  }

  minusOne = () => {
    this.setState(prevState => {
      return {
        value: prevState.value  + 1
      }
    })
  }

  render() {
    const value = this.state.value
    return (
      <div className='Counter'>
        <div className="content">
          <div className="app-desc">
            <h2 className="title">Redux Counter Demo: <small>withou redux</small></h2>
          </div>
          <div className="main">
            <h1 className="value"> {value} </h1>
            <div className="button-group">
              <button className="button is-small" onClick={this.addOne}><strong>Add 1</strong></button>
              <button className="button is-small" onClick={this.minusOne}><strong>Minus 1</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
