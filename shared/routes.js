import React     from 'react';
import { Route } from 'react-router';
import AppContainer from './components/AppContainer';
import Subreddit from './components/Subreddit'

export default (
  <Route path='/' component={AppContainer}>
    <Route path='/r/:subreddit' component={Subreddit}/>
  </Route>
);