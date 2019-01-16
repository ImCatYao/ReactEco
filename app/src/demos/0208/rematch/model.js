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
