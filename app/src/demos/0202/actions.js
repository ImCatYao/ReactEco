import * as actionTypes from './actionTypes'

export const addOne = (payload = null) => {
  return {
    type: actionTypes.ADD_ONE,
    payload
  }
}

export const minusOne = (payload = null) => {
  return {
    type: actionTypes.MINUS_ONE,
    payload
  }
}

export const reset = (payload = null) => {
  return {
    type: actionTypes.RESET
  }
}
