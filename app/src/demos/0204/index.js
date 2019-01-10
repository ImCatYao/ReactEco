import React, { Component } from 'react'
import { store } from './store'
import * as actions from './actions'
import * as actionTypes from './actionTypes'

import Post from './Post'

export default class AsynchrousAction extends Component {
  state = store.getState()

  componentDidMount () {
    store.dispatch({
      type: actionTypes.SHOW_LOADING
    })
    store.dispatch(actions.fetchPosts()).then((data) => {
      store.dispatch(data)
      this.setState(store.getState())
    })
  }

  render() {
    const { posts, isFetching, error } = this.state
    return (
      <div className='Counter'>
        <div className="content">
          <div className="main">
            {
              isFetching ? <div className="loading">Loading...</div> : null
            }
            {
              error ? <div className="error">{error}</div> : null
            }
            <div className="content">
              {
                posts.map(postItem => {
                  return (
                      <Post
                        className="box"
                        key={postItem.id}
                        {...postItem}>
                      </Post>
                    )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
