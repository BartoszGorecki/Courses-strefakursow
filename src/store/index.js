import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";
import { rootReducer } from "../reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  middleware.concat(
    createLogger({
      collapsed: true,
      diff: true
    })
  );
}
const enhancer = compose(
  applyMiddleware(...middleware),
  persistState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, enhancer);
/* eslint-enable */

export default store;
