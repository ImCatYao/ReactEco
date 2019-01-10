import * as actionTypes from './actionTypes'

export const incrementOne = () => {
  return {
    type: actionTypes.ADD_ONE
  }
}

export const decrementOne = () => {
  return {
    type: actionTypes.MINUS_ONE
  }
}
