import React from 'react'

const Post = (props) => {
  let { className = '', id, title, body } = props
  className = 'Post ' + className
  return (
    <div className={className}>
      <h1 className="title is-size5">
        <small className="is-size8">{id}.</small>
        {title}
      </h1>
      <div className="content">
        {body}.
      </div>
    </div>
  )
}

export default Post
