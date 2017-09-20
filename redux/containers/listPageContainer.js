import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import ListPageComponent from "../../components/ListPageComponent";
import getItemsProcess from "../thunks/getItemsProcess";
import updateItemsProcess from "../thunks/updateItemsProcess";
import deleteItemProcess from "../thunks/deleteItemProcess";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    onDidMount: () => dispatch(getItemsProcess()),
    updateThisItem: fullItem => dispatch(updateItemsProcess(fullItem)),
    deleteItem: id => dispatch(deleteItemProcess(id))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.onDidMount();
  }
});

export default compose(connectToStore, withLifecycle)(ListPageComponent);
