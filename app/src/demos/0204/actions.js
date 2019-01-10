import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => {
      return {
        type: actionTypes.SET_POSTS,
        payload: data
      }
    }).catch(e => {
      return {
        type: actionTypes.SET_ERROR,
        payload: e
      }
    })
}