import { navigate } from '@reach/router'

export const user = {
  state: {
    username: ''
  },
  reducers: {
    doLogin(state, payload) {
      const { username } = payload
      return {
        username
      }
    },
    unLogin(state) {
      return {
        username: ''
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
      setTimeout(() => {
        navigate('/dashboard')
      }, 0)
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
        } else {
          const path = window.location.pathname
          if(path.indexOf('dashboard') > -1) {
            navigate('/login')
          }
        }
      } catch(e) {
        console.log(e)
      }
    }
  })
}
