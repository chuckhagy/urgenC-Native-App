import React from "react";
import moment from "moment";
import { Text } from "native-base";

export default class TickerComponent extends React.Component {
  state = {
    timeRemaining: ""
  };

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let currentTime = moment(Date.now());
    let displayTime = moment(
      moment(moment(this.props.info.duedate).diff(currentTime))
    ).format("DD:hh:mm:ss");
    this.setState({ timeRemaining: displayTime });
  }

  timer() {
    setInterval(this.tick.bind(this), 500);
  }

  render() {
    return (
      <Text style={this.props.style}>
        {this.state.timeRemaining}
      </Text>
    );
  }
}
