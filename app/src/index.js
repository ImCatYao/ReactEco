import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './static/css/common.scss'

const App = () => (
  <div className="App">
    <h1 className="title">App</h1>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
