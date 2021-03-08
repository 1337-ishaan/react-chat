import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { authReducer } from "./store/reducers/auth";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initial = {};
const reducer = combineReducers({
  authReducer,
});

console.log(authReducer);
const storeRoot = createStore(
  reducer,
  initial,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={storeRoot}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
