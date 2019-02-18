import React, { Component } from 'react'
import { store } from './store'
import * as actions from './actions'
import * as actionTypes from './actionTypes'

import Post from './Post'

export default class AsynchrousAction extends Component {
  state = {
    ...store.getState()
  }

  componentDidMount () {
    store.dispatch({
      type: actionTypes.SHOW_LOADING
    })
    store.dispatch(actions.fetchPosts()).then((action) => {
      store.dispatch(action)
      this.setState({
        ...store.getState()
      })
    })
  }

  render() {
    const { posts, isFetching, error } = this.state
    let postList = posts && posts.map(postItem => {
      return (
          <Post
            className="box"
            key={postItem.id}
            {...postItem}>
          </Post>
        )
    })
    return (
      <div className='Posts'>
        {
          isFetching ? <p className="loading">Loading...</p> : null
        }
        {
          error ? <p className="error" style={{'color': 'red'}}>{error}</p> : null
        }
        {
          postList ? <div className="content">{postList}</div> : null
        }
      </div>
    )
  }
}
