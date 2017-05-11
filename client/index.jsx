import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import routes from '../shared/routes';
import configureStore from '../shared/configureStore';
import { fromJS } from 'immutable';

// ISO: Load Initial state from state passed in from server
//let initialState = window.__INITIAL_STATE__;

// NON-ISO: Load Initial state from client
import initialState from '../shared/initialState';

const store = configureStore(initialState);

render(
  <Provider store={store}>
      <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);