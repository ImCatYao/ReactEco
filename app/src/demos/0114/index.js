
import React, { Component } from 'react'
import { Provider, Language } from './context'
import Slogan from './components/Slogan'

export default class ContextSample extends Component {
  state = {
    la: Language['en']
  }

  handleSwitchLanguage = () => {
    if(this.state.la === Language['en']) {
      this.setState({
        la: Language['cn']
      })
    } else {
      this.setState({
        la: Language['en']
      })
    }
  }

  render () {
    return (
      <Provider value={this.state.la}>
        <div className="ContextSample box">
          <Slogan></Slogan>
          <button className="is-small button" onClick={this.handleSwitchLanguage}><strong>Switch</strong></button>
        </div>
      </Provider>
    )
  }
}
