import * as constants from './constants'

export function checkAuth(username, password) {
  return username === constants.DEFAULT_USER_NAME && password === constants.DEFAULT_PASSWORD
}
