import React from 'react';

const Post = ({post}) => (
  <div className='post'>
    <div className='score'>
      <span>{post.score}</span>
    </div>
    <div className='post-info'>
      <div>
        <a target='_blank' className='post-info-title' href={post.url}>{post.title}</a> <span>({post.domain})</span>
      </div>
      <div>
        <span>submitted by {post.author}</span>
      </div>
      <div>
        <span>{post.num_comments} comments</span>
      </div>
    </div>
  </div>
);

export default Post;