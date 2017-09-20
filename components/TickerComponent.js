import React from "react";
import moment from "moment";
import { Text } from "native-base";
import { StyleSheet } from "react-native";

export default class TickerComponent extends React.Component {
  state = {
    timeRemaining: "",
    math: ""
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (moment(currentTime).isSameOrAfter(moment(this.props.info.duedate))) {
      this.props.updateThisItem(this.props.info);
    }

    let currentTime = moment(Date.now());
    let diff = moment(this.props.info.duedate).diff(currentTime, "seconds");
    if (diff <= 60) this.setState({ timeRemaining: `${diff} sec`, math: diff });
    else if (diff <= 3600)
      this.setState({
        timeRemaining: `${(diff / 60).toFixed(2)} min`,
        math: diff
      });
    else if (diff <= 86400)
      this.setState({
        timeRemaining: `${(diff / 3600).toFixed(1)} hr`,
        math: diff
      });
    else if (diff >= 86400)
      this.setState({
        timeRemaining: `${(diff / 86400).toFixed(1)} day`,
        math: diff
      });
    else this.setState({ timeRemaining: diff });
  }

  render() {
    //colorLogic
    let thisStyle = "";
    if (this.state.math <= 30) thisStyle = styles.thirty;
    else if (this.state.math <= 60) thisStyle = styles.sixty;
    else thisStyle = this.props.style;

    return (
      <Text style={thisStyle}>
        {this.state.timeRemaining}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  sixty: {
    color: "red",
    fontSize: 20,
    textAlign: "left"
  },
  thirty: {
    color: "red",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold"
  }
});
