//@flow
import { MARKDOWN_EDIT } from "../actions/MarkdownActions";

export const markdownReducer = (state = {}, action) => {
  switch (action.type) {
  case MARKDOWN_EDIT:
    return Object.assign({}, state, {
      markdown: action.payload.lastItemId
    });
  default:
    return state;
  }
};
