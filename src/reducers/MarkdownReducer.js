//@flow
import { MARKDOWN_EDIT, MARKDOWN_ADD } from "../actions/MarkdownActions";

export const markdownReducer = (
  state = {
    markdowns: []
  },
  action
) => {
  switch (action.type) {
  case MARKDOWN_EDIT:
    const markdowns = [...state.markdowns];
    markdowns[action.payload.itemId] = action.payload.markdown;
    return Object.assign({}, state, {
      markdowns: markdowns
    });
  case MARKDOWN_ADD:
    return Object.assign({}, state, {
      markdowns: [...state.markdowns, action.payload.markdown]
    });
  default:
    return state;
  }
};
