//@flow
import { createStore, applyMiddleware } from "redux";
import { markdownReducer } from "./reducers/MarkdownReducer";
import thunk from "redux-thunk";
import stepsMiddleware from "redux-effects-steps";

export const store = createStore(
  markdownReducer,
  applyMiddleware(thunk, stepsMiddleware)
);
