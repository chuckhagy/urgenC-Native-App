import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import ProfilePageComponent from "../../components/ProfilePageComponent";
import updateUserProcess from "../thunks/updateUserProcess"

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo: attributes => dispatch(updateUserProcess(attributes))
    };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(ProfilePageComponent);