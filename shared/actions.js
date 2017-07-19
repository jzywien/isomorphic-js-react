import * as Actions from './constants';
import { push, replace } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

const redditBase = `https://www.reddit.com/r`;

export const fetchPosts = (subreddit) => (dispatch) => {
  subreddit = subreddit || 'all';

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
    })
    .catch(e => {
      dispatch({
        type: Actions.FETCH_POSTS_FAILURE
      });
    });
};
