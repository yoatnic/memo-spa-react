//@flow
export const MARKDOWN_EDIT = "MARKDOWN/EDIT";

export type MdEditAction = {
  type: string,
  payload: {
    markdown: string
  }
};

export const editMarkdown = (markdown: string): MdEditAction => {
  return {
    type: MARKDOWN_EDIT,
    payload: { markdown }
  };
};
