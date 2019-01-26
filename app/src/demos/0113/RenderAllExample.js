import React, { Component } from 'react'
import RenderAll from './components/RenderAll';

export default class RenderAllExample extends Component {
  render() {
    return (
    <RenderAll content='Hello, world.'>
      {
        ({content}) => (
          <h1>
            {
              content || 'There is no content provided for renderAll component.'
            }
          </h1>
        )
      }
    </RenderAll>
    )
  }
}
