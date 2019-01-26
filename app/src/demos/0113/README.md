# render props  design parttern

**Tutorial**: [https://juejin.im/book/5ba42844f265da0a8a6aa5e9/section/5bb018245188255c83211f12](https://juejin.im/book/5ba42844f265da0a8a6aa5e9/section/5bb018245188255c83211f12)

Basic example

```javascript
import React from 'react'

const RenderAll = (props) => {
  return
  (
    <React.Fragment>
     	{props.children(props)}
    </React.Fragment>
  )
}
```

## Application of render props design parttern

- RenderAll.js

A basic sample of **render.props** works as a function.

- Auth.js

**props.chidlren** as a function to handle bussiness logical in **Auth** component.

## You can pass pass anything that is a function as the property of a props for a component to handle the bussiness logical of a Component

- Auth2.0.js && AuthExample2.0.js

## Dependency Injection and compare render props parttern with HOC parttern
