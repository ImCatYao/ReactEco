import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './components/Counter'
import Stamp from './components/Stamp'

export default class CombineReducers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter></Counter>
        <Stamp></Stamp>
      </Provider>
    )
  }
}
