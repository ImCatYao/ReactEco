import * as actionTypes from './actionTypes'

export function addOne() {
  return {
    type: actionTypes.ADD_ONE,
    payload: {
      desc: 'add one'
    }
  }
}

export function minusOne () {
  return {
    type: actionTypes.MINUS_ONE,
    payload: {
      desc: 'minus one'
    }
  }
}
