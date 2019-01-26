import React, { Component } from 'react'

export default class RenderAll extends Component {
  render() {
    return (
      <div>
        {
          this.props.children(this.props)
        }
      </div>
    )
  }
}
