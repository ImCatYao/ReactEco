import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const logger = createLogger()

// createStore(reducers, initialState, middlewares)
export const store = createStore(
  reducers, 
  { value: 0 },
  applyMiddleware(logger)
)
