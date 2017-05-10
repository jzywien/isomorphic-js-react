import * as Actions from './constants';
import { push, replace } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

const redditBase = `https://www.reddit.com/r`;

export const fetchPosts = (params) => (dispatch) => {
  const {subreddit} = params;
  dispatch({
    type: Actions.FETCH_POSTS_REQUEST
  });

  return fetch(`${redditBase}/${subreddit}/.json`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: Actions.FETCH_POSTS_SUCCESS,
        subreddit,
        posts: json.data.children.map(post => {
          return post.data;
        })
      });
    });
};
