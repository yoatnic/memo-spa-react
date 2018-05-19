//@flow
import { connect } from "react-redux";
import AppRouter from "../../AppRouter";
import { addMarkdown, editMarkdown } from "../../actions/MarkdownActions";

const mapStateToProps = state => {
  return {
    markdowns: state.markdowns
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addMarkdown(markdown: string): void {
      dispatch(addMarkdown(markdown));
    },
    editMarkdown(markdown: string): void {
      dispatch(editMarkdown(markdown));
    }
  };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default RootContainer;
