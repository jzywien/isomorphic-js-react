import React from 'react';

const Post = ({post}) => {
  return (
    <div className='post'>
      <span>{post.title}</span>
    </div>
  )
}

export default Post;