import React, { Component } from 'react'
import { store, unsubscribe } from './store'
import * as actions from './actions'

export default class Counter extends Component {
  state = {
    value: 0
  }

  addOne = () => {
    store.dispatch(actions.addOne())
    const { value } = store.getState()
    this.setState(prevState => {
      return {
        value
      }
    })
  }

  minusOne = () => {
    store.dispatch(actions.minusOne())
    const { value } = store.getState()
    this.setState(prevState => {
      return {
        value
      }
    })
  }
  unsubscribe = () => {
    unsubscribe()
  }

  render() {
    const value = this.state.value
    return (
      <div className='Counter'>
        <div className="content">
          <div className="app-desc">
            <h2 className="title">Redux Counter Demo</h2>
          </div>
          <div className="main">
            <h1 className="value"> {value} </h1>
            <div className="button-group">
              <button className="button is-small" onClick={this.addOne}><strong>Add 1</strong></button>
              <button className="button is-small" onClick={this.minusOne}><strong>Minus 1</strong></button>
            </div>
            <button className="button btn-unsubscribe" onClick={this.unsubscribe}><strong>Unsubscribe</strong></button>
          </div>
        </div>
      </div>
    )
  }
}
