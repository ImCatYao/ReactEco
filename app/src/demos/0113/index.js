import React, { Component } from 'react'
import RenderAllExample from './RenderAllExample'
import AuthExample from './AuthExample'
import AuthExampleV2 from './AuthExample2.0';

export default class RenderPropsExample extends Component {
  render() {
    return (
      <React.Fragment>
        <RenderAllExample></RenderAllExample>
        <AuthExample></AuthExample>
        <AuthExampleV2></AuthExampleV2>
      </React.Fragment>
    )
  }
}
