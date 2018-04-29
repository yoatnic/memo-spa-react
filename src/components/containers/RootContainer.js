//@flow
import { connect } from "react-redux";
import AppRouter from "../../AppRouter";
import { requestNextItems, receiveNextItems } from "../../actions/FetchItems";
import type { State } from "../../reducers/ItemsReducer";
import { fetchNewItems } from "../../API/Items";

const mapStateToProps = (state: State): State => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    async onGetNextItems(lastItemId: number): Promise<any> {
      dispatch(requestNextItems(lastItemId));

      const res = await fetchNewItems(lastItemId);
      const json = await res.json();
      dispatch(receiveNextItems(json));
    }
  };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default RootContainer;
