import React     from 'react';
import {Route} from 'react-router';
import Subreddit from './components/Subreddit'

export default (
  <Route path='/' component={Subreddit}>
    <Route path='/r/:subreddit' component={Subreddit}/>
  </Route>
);