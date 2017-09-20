import React from "react";
import moment from "moment";
import { Text } from "native-base";

export default class TickerComponent extends React.Component {
  state = {
    timeRemaining: ""
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (moment(currentTime).isSameOrAfter(moment(this.props.info.duedate))) {
      this.props.expiredItem(this.props.info.id);
    }
    let currentTime = moment(Date.now());
    let displayTime = moment(
      moment(moment(this.props.info.duedate).diff(currentTime))
    ).format("DD:hh:mm:ss");
    this.setState({ timeRemaining: displayTime });
  }

  render() {
    return (
      <Text style={this.props.style}>
        {this.state.timeRemaining}
      </Text>
    );
  }
}
