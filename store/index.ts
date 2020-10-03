import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// mount it on the Store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
