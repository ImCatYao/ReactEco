import * as actionTypes from './actionTypes'

export default function reducers(state, { type, payload = null }) {
  console.log(`At ${(new Date()).toString()}`)
  console.log(`{type: ${type}`)
  console.log('payload:', payload, '}')

  switch(type) {
    case actionTypes.ADD_ONE:
      return {
        value: state.value + 1
      }
    case actionTypes.MINUS_ONE:
      return {
        value: state.value - 1
      }
    default: 
      return state
  }
}
