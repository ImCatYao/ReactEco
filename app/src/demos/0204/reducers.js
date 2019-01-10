import * as actionTypes from './actionTypes'

export default function reducers(state, { type, payload = {} }) {
  switch(type) {
    case actionTypes.SHOW_LOADING:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: payload,
        error: null,
        isFetching: false,
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false
      }
    default: 
      return state
  }
}
