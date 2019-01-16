import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './rematch'
import Counter from './components/Counter'

class RematchCounterDemo extends Component {
  render () {
    return (
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    )
  }
}

export default RematchCounterDemo
