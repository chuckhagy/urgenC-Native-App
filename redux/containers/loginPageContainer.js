import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import LoginPageComponent from "../../components/LoginPageComponent";
import tokenProcess from "../thunks/tokenProcess";
import autoLoginProcess from "../thunks/autoLoginProcess";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    tokenAttempt: fullItem => dispatch(tokenProcess(fullItem)),
      autoLogin: ((token, userId) => dispatch(autoLoginProcess(token, userId)))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    console.log('')
  }
});


export default compose(connectToStore, withLifecycle)(LoginPageComponent);
