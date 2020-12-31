import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./root-reducer"
import rootSaga from "./root-saga"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
