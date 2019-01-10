import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'

const logger = createLogger()
const intialState = {
  isFetching: false,
  posts: [],
  error: null
}

// createStore(reducers, initialState, middlewares)
export const store = createStore(
  reducers,
  intialState, 
  applyMiddleware(promiseMiddleware, logger)
)
