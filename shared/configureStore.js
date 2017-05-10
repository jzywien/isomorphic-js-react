import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = (initialState) => {
  // Load state from local storage
  // const persistedState = loadState();
  const persistedState = {};

  const rootReducer = combineReducers({
    ...reducers
  });

  const middleware = [
    thunk
  ];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}

export default configureStore;