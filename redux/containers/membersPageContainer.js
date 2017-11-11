import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import MembersPageComponent from "../../components/MembersPageComponent";
import deleteAssignmentProcess from "../thunks/deleteAssignmentProcess"
import createAssignmentProcess from "../thunks/createAssignmentProcess"

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAssignment: assignmentId => dispatch(deleteAssignmentProcess(assignmentId)),
        createAssignment: attributes => {
            dispatch(createAssignmentProcess(attributes))}
    };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(MembersPageComponent);