import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Counter from './Counter'

export default class CounterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    )
  }
}
