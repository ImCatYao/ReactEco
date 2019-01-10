# Redux middleware

**Tutorial** [http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)

- applyMiddleware

```javascript
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

const logger = createLogger()

export const store = createStore(reducers, { value: 0 }, applymiddleWare(logger))

```

- redux-logger
- redux-thunk
