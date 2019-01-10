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
