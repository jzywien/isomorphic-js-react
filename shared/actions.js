import * as Actions from './constants';
import { push, replace } from 'react-router-redux';

export const fetchPosts = (subreddit) => (dispatch) => {
  dispatch({
    type: Actions.FETCH_POSTS_REQUEST
  });

  // fetch the posts
  dispatch({
    type: Actions.FETCH_POSTS_SUCCESS,
    subreddit,
    posts: [{
      title: 'test post',
      upvotes: 100
    }, {
      title: 'test post 2',
      upvotes: 100
    }]
  });
};
