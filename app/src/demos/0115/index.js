import React, { Component } from 'react'
import Tabs, { TabItem } from './Tabs'

const languageStack = [
  'English',
  'Chinese',
  'French'
]

export default class ReactChildrenSample extends Component {
  state = {
    activeLanguageIndex: 0
  }

  handleSwitchLanguage = (activeLanguageIndex) => {
    this.setState({
      activeLanguageIndex
    })
  }

  render() {
    const activeLanguageIndex = this.state.activeLanguageIndex
    const language = languageStack[activeLanguageIndex]
    return (
      <React.Fragment>
        <Tabs
          activeTabIndex={activeLanguageIndex}
          handleClick={this.handleSwitchLanguage}
          cssClass={'is-centered'}
        >
          {
           languageStack.map(la => (
             <TabItem>{la}</TabItem>
           ))
          }
        </Tabs>
        <div className="tab-content">
          You choose to learn <strong>{language}</strong>.
        </div>
      </React.Fragment>
    )
  }
}