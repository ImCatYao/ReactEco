import { navigate } from '@reach/router'

export const user = {
  state: {
    username: '',
    auth: false
  },
  reducers: {
    doLogin(state, payload) {
      const { username } = payload
      return {
        username,
        auth: true
      }
    },
    unLogin(state) {
      return {
        username: '',
        auth: false
      }
    }
  },
  effects: (dispatch) => ({
    doLoginAndCacheInfo(payload, rootState) {
      const {
        username
      } = payload
      localStorage.setItem('username', username)
      dispatch.user.doLogin(payload)
    },
    signOutAndClearCache(payload, rootState) {
      localStorage.removeItem('username')
      dispatch.user.unLogin(payload)
      setTimeout(() => {
        navigate('/login')
      }, 0)
    },
    loadUserInfo() {
      try {
        const username = localStorage.getItem('username')
        if(username) {
          dispatch({
            type: 'user/doLogin', 
            payload: {
              username
            }
          })
        }
      } catch(e) {
        console.log(e)
      }
    }
  })
}
