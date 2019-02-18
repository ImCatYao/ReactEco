import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    value: 0
  }

  addOne = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      }
    })
  }

  minusOne = () => {
    this.setState(prevState => {
      return {
        value: prevState.value  - 1
      }
    })
  }

  render() {
    const value = this.state.value
    return (
      <div className='Counter box' style={{'max-width':'420px', 'margin': '0 auto', 'text-align': 'center'}}>
        <div className="content">
          <div className="app-desc">
            <h2 className="title">Counter Demo: <small>without redux</small></h2>
          </div>
          <div className="main">
            <h1 className="value"> {value} </h1>
            <div className="button-group">
              <button className="button is-small" onClick={this.addOne}><strong>Add One</strong></button>
              <button className="button is-small" onClick={this.minusOne}><strong>Minus One</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
