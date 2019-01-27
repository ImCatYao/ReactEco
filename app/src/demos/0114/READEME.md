# React Context

**Tutorial**: [https://juejin.im/book/5ba42844f265da0a8a6aa5e9/section/5bb01858e51d450e805b744c](https://juejin.im/book/5ba42844f265da0a8a6aa5e9/section/5bb01858e51d450e805b744c)


## Create a Context instance

```javascript
import React from 'react'

export const Language = {
  en: 'I love China',
  cn: '我爱中国'
}

const SloganContext = React.createContext(Language['cn'])

export default SloganContext

// Provider and Consumer
export const { Provider, Consumer } = SloganContext

```


## Access to context value

```javascript
import React from 'react'
import { Consumer } from '../context'

const Slogan = (props) => {
  return (
    <Consumer>
      {
        slogan => {
          return (
            <div className="Slogan">
              <p className="desc">
                <strong>{slogan}</strong>
              </p>
            </div>
          )
        }
      }
    </Consumer>
  )
}

export default Slogan
```

##  Provide value via Provider

```javascript
import { Provider } from './context'
// ... some code

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
```