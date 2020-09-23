import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers";

let store;

// a configureStore function to initialise store
// use of middleware redux thunk that return function by passing action creater
// logger is used to keep us updated the changes in the state
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
