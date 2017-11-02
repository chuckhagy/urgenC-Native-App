import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import ProfilePageComponent from "../../components/ProfilePageComponent";
import updateUserProcess from "../thunks/updateUserProcess"
import deleteUserProcess from "../thunks/deleteUserProcess"

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo: attributes => dispatch(updateUserProcess(attributes)),
        deleteUser: () => dispatch(deleteUserProcess())
    };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(ProfilePageComponent);