# Redux-Promise

It helps you return a promise in your actionCreator function.

## A sample of redux-promise

- Add redux-promise surpport in store

```javascript
export const store = createStore(
  reducers,
  intialState,
  applyMiddleware(promiseMiddleware, logger)
)
```

- return a promise in an actionCreator

```javascript
import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => {
      return {
        type: actionTypes.SET_POSTS,
        payload: data
      }
    }).catch(e => {
      return {
        type: actionTypes.SET_ERROR,
        payload: e
      }
    })
}
```

- dispatch an action

```javascript
componentDidMount() {
  store.dispatch({
    type: actionTypes.SHOW_LOADING
  })

  store.dispatch(actions.fetchPosts()).then((data) => {
    store.dispatch(data)
    this.setState(store.getState())
  })
}
````
