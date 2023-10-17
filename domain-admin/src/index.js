import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./App";
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
