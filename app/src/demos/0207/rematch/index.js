import { init } from '@rematch/core'
import * as models from './model'

const store = init({
  models
})

export default store

// equal to redux store
store.subscribe(() => {
  console.log(store.getState())
})
