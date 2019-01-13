import * as types from '../actionTypes'
import * as constants from '../../constants'

export default function count(count = constants.DEFAULT_COUNT, {type, payload = null}) {
  switch(type) {
    case types.COUNT_INCREMENT_ONE:
      return count + 1
    case types.COUNT_DECREMENT_ONE:
      return count - 1
    default:
      return count
  }
}
