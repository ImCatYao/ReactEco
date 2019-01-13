import * as types from '../actionTypes'
import * as constants from '../../constants'

export default function stamp(stamp = constants.DEFAULT_STAMP, {type, payload}) {
  switch(type) {
    case types.SET_STAMP:
      return payload.stamp
    default:
      return stamp
  }
}
