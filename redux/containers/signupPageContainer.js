import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import SignupPageComponent from "../../components/SignupPageComponent";
import signupProcess from "../thunks/signupProcess";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: fullItem => dispatch(signupProcess(fullItem)),
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    console.log('Mounted')
  }
});


export default compose(connectToStore, withLifecycle)(SignupPageComponent);
