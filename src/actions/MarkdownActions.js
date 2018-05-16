//@flow
export const MARKDOWN_EDIT = "MARKDOWN/EDIT";
export const MARKDOWN_ADD = "MARKDOWN/ADD";

export type MdEditAction = {
  type: string,
  payload: {
    markdown: string
  }
};

export const addMarkdown = (markdown: string): MdEditAction => {
  return {
    type: MARKDOWN_EDIT,
    payload: { markdown }
  };
};

export const editMarkdown = (markdown: string): MdEditAction => {
  return {
    type: MARKDOWN_EDIT,
    payload: { markdown }
  };
};
