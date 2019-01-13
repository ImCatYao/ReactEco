import * as constants from '../constants'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()
const middlewares = [thunk, logger]

export const store = createStore(
  reducers, 
  {
    count: constants.DEFAULT_COUNT,
    stamp: constants.DEFAULT_STAMP
  },
  applyMiddleware(...middlewares)
)
