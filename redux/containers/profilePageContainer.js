import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import ProfilePageComponent from "../../components/ProfilePageComponent";
import getUserProcess from "../thunks/getUserInfoProcess";

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: fullUser => dispatch(getUserProcess(fullUser))
    };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(ProfilePageComponent);