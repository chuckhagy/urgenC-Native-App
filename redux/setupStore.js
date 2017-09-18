import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default function() {
  return createStore(rootReducer, enhancers);
}
