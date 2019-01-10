import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
const logger = createLogger()
// createStore(reducers, initialState, middlewares)
export const store = createStore(reducers, { value: 0 }, applyMiddleware(logger))

export const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
