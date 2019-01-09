import { createStore } from 'redux'
import reducers from './reducers'

// createStore(reducers, initialState)
export const store = createStore(reducers, { value: 0 })

export const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
