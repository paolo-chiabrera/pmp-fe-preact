import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require(`redux-logger`);

  middlewares.push(createLogger());
}

export default createStore(
  reducer,
  {},
  compose(applyMiddleware(...middlewares))
);
