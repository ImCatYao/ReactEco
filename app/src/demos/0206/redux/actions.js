import * as types from './actionTypes'

export const incrementOne = () => {
  return dispatch => {
    dispatch({
      type: types.COUNT_INCREMENT_ONE
    })
  }
}

export const decrementOne = () => {
  return dispatch => {
    dispatch({
      type: types.COUNT_DECREMENT_ONE
    })
  }
}

export const setStamp = () => {
  const stamp = Date.now()
  return dispatch => {
    return dispatch({
      type: types.SET_STAMP,
      payload: {
        stamp
      }
    })
  }
}
