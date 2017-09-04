import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import reducer from './reducer';

export default createStore(
  reducer,
  {},
  compose(applyMiddleware(createLogger(), promiseMiddleware()))
);
