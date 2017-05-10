import React from 'react';

const Post = ({post}) => (
  <div className='post'>
    <span>{post.title}</span>
  </div>
);

export default Post;