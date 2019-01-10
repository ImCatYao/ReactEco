import React, { Component } from 'react'
import { store } from './store'
import Counter from './Counter'
import * as actions from './actions'

export default class CounterApp extends Component {
  state = store.getState()

  onIncrementOne = () => {
    store.dispatch(actions.onIncrementOne())
    this.setState(store.getState())
  }

  onDecrementOne = () => {
    store.dispatch(actions.onDecrementOne())
    this.setState(store.getState())
  }

  render() {
    const value = this.state.value
    return (
      <div className='CounterApp'>
        <div className="app-title">Counter App with redux-thunk</div>
        <Counter
          value={value}
          onIncrementOne={this.onIncrementOne}
          onDecrementOne={this.onDecrementOne}
        ></Counter>
      </div>
    )
  }
}
