import {connect} from "react-redux";
import {compose, lifecycle} from "recompose";
import ListPageComponent from "../../components/ListPageComponent";
import getItemsProcess from "../thunks/getItemsProcess";
import updateItemsProcess from "../thunks/updateItemsProcess";
import deleteItemProcess from "../thunks/deleteItemProcess";
import updateAssignmentProcess from "../thunks/updateAssignmentProcess";

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {
        onDidMount: () => dispatch(getItemsProcess()),
        updateThisItem: fullItem => dispatch(updateItemsProcess(fullItem)),
        updateThisAssignment: fullItem => dispatch(updateAssignmentProcess(fullItem)),
        deleteItem: id => dispatch(deleteItemProcess(id)),
        refreshList: () => dispatch({type: "REFRESH_LIST"}),
        logout: () => dispatch({type: "LOGOUT"}),
        expiration: () => dispatch({type: "EXPIRED"})
    };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
    componentDidMount() {
        this.props.onDidMount();
    }
});

export default compose(connectToStore, withLifecycle)(ListPageComponent);
