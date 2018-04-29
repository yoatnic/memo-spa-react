//@flow
import { REQUEST_NEXT_ITEMS, RECEIVE_NEXT_ITEMS } from "../actions/FetchItems";
import type {
  Item,
  RequestItemAction,
  ReceiveItemAction
} from "../actions/FetchItems";

export type State = {
  items: Array<Item>
};

const initinalState: State = {
  items: []
};

export const itemsReducer = (
  state: State = initinalState,
  action: any
): State => {
  switch (action.type) {
  case REQUEST_NEXT_ITEMS:
    return Object.assign({}, state, {
      lastItemId: (action: RequestItemAction).payload.lastItemId
    });
  case RECEIVE_NEXT_ITEMS:
    return Object.assign({}, state, {
      items: [...state.items, ...(action: ReceiveItemAction).payload.items]
    });
  default:
    return state;
  }
};
