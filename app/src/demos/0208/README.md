# Rematch supports plugins to enchance model

Rematch supports plugins to enhance model.

## Rematch Select

A "selector" is just a function that uses the current state to derive a value, it's smilar to computed property for vue object.

- Install it

```bash
npm install @rematch/select
```

- Adapt it in store creating

```javascript
import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import * as models from './model'

const plugins = [selectPlugin()]

const store = init({
  models,
  plugins
})

export default store
```

- In model

```javascript
import * as constants from '../constants'

export const counter = {
  state: {
    count: constants.INITTIAL_COUNT,
    countHistory: [constants.INITTIAL_COUNT]
  },
  reducers: {
    onIncrementOne(state, payload = 1) {
      const count = state.count + payload
      return {
        count,
        countHistory: [...state.countHistory, count]
      }
    },
    onDecrementOne(state, payload = 1) {
      const count = state.count - payload
      return {
        count,
        countHistory: [...state.countHistory, count]
      }
    }
  },
  // the selectors, is similar to the computed property of vue instance.
  selectors: {
    count() {
      //  return a function
      return (rootState, props) => rootState.counter.count
    },
    countHistory() {
      // return a function
      return (rootState, props) => rootState.counter.countHistory
    }
  }
}
````