# Rematch

- Official site: [https://github.com/rematch/rematch](https://github.com/rematch/rematch)
- Why Rematch: [https://hackernoon.com/redesigning-redux-b2baee8b8a38](https://hackernoon.com/redesigning-redux-b2baee8b8a38)

## Side effect

In some sennarios, you need to cache some data in localStorage or cache,  and according to the custom of Redux, reducer is a pure function, so operate data caching in reducer is not approperiate.

In some articles, they call the code segments that have asynchronous operation, something that is not approperiate as a part of a pure functions as side effect.

## The available for side effect solution

There are many exsiting solutions for side-effect handling, like *redux-saga*, *redux-dva*,  and *rematch*.

Besides, rematch is similar to vuex, it's easier to pick it up and use it.
