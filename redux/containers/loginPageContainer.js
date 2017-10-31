import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import LoginPageComponent from "../../components/LoginPageComponent";
import tokenProcess from "../thunks/tokenProcess";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    tokenAttempt: fullItem => dispatch(tokenProcess(fullItem)),
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    console.log('Mounted yo')
  }
});


export default compose(connectToStore, withLifecycle)(LoginPageComponent);
