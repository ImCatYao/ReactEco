import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    const {
      title,
      onSubmit
    } = this.props
    return (
      <div className="Form-container">
        {title ? <h4 className="title is-size4">{title}</h4> : null}
        <form onSubmit={onSubmit} className="form">
          {this.props.children}
        </form>
      </div>
    )
  }
}
