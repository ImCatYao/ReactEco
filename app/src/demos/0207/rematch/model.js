// The model brings together state, reducers, async actions & action creators in one place.

export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions， state is passed as the first param by default.
    onIncrementOne(state, payload = 1) {
      return state + payload
    },
    onDecrementOne(state, payload = 1) {
      return state - payload
    }
  },
  /*
    handle state changes with impure functions.
   use async/await for async actions
  */
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.onIncrementOne(payload)
    }
  })
}
