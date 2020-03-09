import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { default as configureStore } from "./redux/store";
import "./index.css";
import * as components from "./components";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <components.App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
