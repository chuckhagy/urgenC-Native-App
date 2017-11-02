import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import MembersPageComponent from "../../components/MembersPageComponent";
import deleteAssignmentProcess from "../thunks/deleteAssignmentProcess"

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAssignment: assignmentId => dispatch(deleteAssignmentProcess(assignmentId))
    };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(MembersPageComponent);