//@flow
import { createStore, applyMiddleware } from "redux";
import { itemsReducer } from "./reducers/ItemsReducer";
import thunk from "redux-thunk";
import stepsMiddleware from "redux-effects-steps";

export const store = createStore(
  itemsReducer,
  applyMiddleware(thunk, stepsMiddleware)
);
