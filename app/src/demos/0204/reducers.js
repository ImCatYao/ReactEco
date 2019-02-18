import * as actionTypes from './actionTypes'

export default function reducers(state, { type, payload = {} }) {
  switch(type) {
    case actionTypes.SHOW_LOADING:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.SET_POSTS:
    case actionTypes.SET_ERROR:
      return {...payload}
    default: 
      return state
  }
}
