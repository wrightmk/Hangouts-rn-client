import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [
  promiseMiddleware(), // not using this <--- only for default promise based reducers
  thunk // invoke sync or async actions with `dispatch` in action
];

if (__DEV__) {
  const logger = require('redux-logger');
  middlewares.push(logger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middlewares))
);
