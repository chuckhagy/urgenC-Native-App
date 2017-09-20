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
      this.props.updateThisItem(this.props.info);
    }

    let currentTime = moment(Date.now());
    let diff = moment(this.props.info.duedate).diff(currentTime, "seconds");
    if (diff <= 60) this.setState({ timeRemaining: `${diff} sec` });
    else if (diff <= 3600)
      this.setState({ timeRemaining: `${(diff / 60).toFixed(2)} min` });
    else if (diff <= 86400)
      this.setState({ timeRemaining: `${(diff / 3600).toFixed(1)} hr` });
    else if (diff >= 86400)
      this.setState({ timeRemaining: `${(diff / 86400).toFixed(1)} day` });
    else this.setState({ timeRemaining: diff });
  }

  render() {
    return (
      <Text style={this.props.style}>
        {this.state.timeRemaining}
      </Text>
    );
  }
}
