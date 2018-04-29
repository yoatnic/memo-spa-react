//@flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import RootContainer from "./components/containers/RootContainer";
import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementsByClassName("main")[0]
);
