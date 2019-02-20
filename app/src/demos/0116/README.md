# Portals

This folder is an example of Modal using React Portals; the Modal style based on [Bulma modal](https://bulma.io/documentation/components/modal/), and the API of it based [Modal component of Ant-Design](https://ant.design/components/modal/).

## React Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

export default Sample extends React.Component {
  render () {
    return ReactDOM.createPortal(
      (your template),
      domNode
    )
  }
}
````

Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way.