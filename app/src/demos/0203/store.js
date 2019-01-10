import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const logger = createLogger()

// createStore(reducers, initialState, middlewares)
export const store = createStore(
  reducers, 
  { value: 0 },
  applyMiddleware(thunk, logger)
)

export const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
