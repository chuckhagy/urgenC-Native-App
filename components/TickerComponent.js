import React from "react";
import moment from "moment";
import {Text} from "native-base";
import {StyleSheet} from "react-native";

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
        if (
            moment.utc(currentTime).isSameOrAfter(moment.utc(this.props.info.duedate))
        ) {
            this.props.updateThisItem ? this.props.updateThisItem(this.props.info) : null;
        }
        let currentTime = moment.utc(Date.now());
        let diff = moment.utc(this.props.info.duedate).diff(currentTime, "seconds");
        let newDiff = moment(this.props.info.duedate).fromNow(true);
        if (diff <= 60) this.setState({timeRemaining: `${diff} sec`, math: diff});
        else if (diff <= 3600) {

            this.setState({
                timeRemaining: newDiff,
                math: diff
            });
        } else if (diff <= 86400)
            this.setState({
                timeRemaining: newDiff,

                math: diff
            });
        else if (diff >= 86400)
            this.setState({
                timeRemaining: newDiff,
                math: diff
            });
        else this.setState({timeRemaining: diff});
    }

    render() {
        //colorLogic
        let thisStyle = "";
        if (this.state.math <= 60) thisStyle = styles.thirty;
        else if (this.state.math <= 300) thisStyle = styles.sixty;
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
