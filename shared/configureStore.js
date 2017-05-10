import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = (initialState) => {
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