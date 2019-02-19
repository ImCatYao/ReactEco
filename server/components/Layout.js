import React from "react"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "Welcome to React SSR!"
    }
  }
  render() {
    return (
      <p>Hello, world</p>
    )
  }
}
