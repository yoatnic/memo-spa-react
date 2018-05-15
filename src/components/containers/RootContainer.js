//@flow
import { connect } from "react-redux";
import AppRouter from "../../AppRouter";
import { editMarkdown } from "../../actions/MarkdownActions";

const mapStateToProps = state => {
  return {
    markdown: state.markdown
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    async editMarkdown(markdown: string): Promise<any> {
      dispatch(editMarkdown(markdown));
    }
  };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default RootContainer;
