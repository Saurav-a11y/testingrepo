import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./root-reducer";

import thunk from "redux-thunk";

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
