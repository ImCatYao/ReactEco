import * as utils from '../utils'


const Auth = (props) => {
  const username = utils.getCachedAuth()
  if(username) {
    return props.login(username)
  } else  {
    return props.nologin(username)
  }
}

export default Auth
