import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import App from './App'

import './static/bulma/index.sass'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
