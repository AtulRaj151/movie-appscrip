import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./Components/App";
import { configureStore } from "./store";
const store = configureStore();
console.log(store);
ReactDOM.render(
  // use provider to pass store to each components
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
