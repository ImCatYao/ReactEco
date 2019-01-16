import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import * as models from './model'

const plugins = [selectPlugin()]

const store = init({
  models,
  plugins
})

export default store
