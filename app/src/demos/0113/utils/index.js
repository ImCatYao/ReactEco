import * as constants from '../constants'

export const getCachedAuth = () => {
  return localStorage.getItem(constants.AUTH_NAME) || ''
}

export default function () {
  console.log('Hey, I\'m utils')
}