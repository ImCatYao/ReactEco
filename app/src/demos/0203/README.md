# Redux asynchronous actions

**Tutorial** [http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)

## redux-thunk

It helps you to return a function in actionCreator function.

- Add redux-thunk surpport

```javascript
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const logger = createLogger()

export const store = createStore(
  reducers,
  { value: 0 },
  applymiddleWare(thunk, logger)
)
```

- In the action, return a function instead of an action object.

```javascript
import * as actionTypes from './actionTypes'

// return a function other than return an plain object
export const onIncrementOne = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_ONE
    })
  }
}

export const onDecrementOne = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.MINUS_ONE
    })
  }
}
```

## Dispatch an action

```javascript
import store from './store'
import * as actions from './actions'

store.dispatch(actions.incremtnOne())
```
