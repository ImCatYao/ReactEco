import { init } from '@rematch/core'
import * as models from './model'

const store = init({
  models
})

store.dispatch({
  type: 'user/loadUserInfo'
})

export default store


