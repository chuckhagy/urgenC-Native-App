import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import AddPageComponent from "../../components/AddPageComponent";
import createItemProcess from "../thunks/createItemProcess";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    createThisItem: fullItem => dispatch(createItemProcess(fullItem))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(AddPageComponent);
