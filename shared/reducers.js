import {combineReducers} from 'redux';
import * as Actions from './constants';

const isFetching = (state = false, action) => {
  switch(action.type) {
    case Actions.FETCH_POSTS_REQUEST:
       return true;
    case Actions.FETCH_POSTS_SUCCESS:
    case Actions.FETCH_POSTS_FAILURE:
      return false;
  }
  return state;
}

const posts = (state = [], action) => {
  switch(action.type) {
    case Actions.FETCH_POSTS_SUCCESS:
      const subreddit = action.subreddit;
      const posts = action.posts;
      return [
        ...posts
      ];
  }
  return state;
}

export default {
  app: combineReducers({
    isFetching,
    posts
  })
};