import React from "react";
import moment from "moment";

import { StyleSheet, View, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  H1
} from "native-base";

export default class ResponseComponent extends React.Component {
  _handleYes = () => {
    let thisItem = this.props.props.items.find(
      item =>
        moment
          .utc(moment.utc(Date.now()))
          .isSameOrAfter(moment.utc(item.duedate)) && item.status === 'current'
    );
    thisItem.status = "success";
    this.props.props.updateThisAssignment(thisItem);
  };

  _handleNo = () => {
    let thisItem = this.props.props.items.find(
      item =>
        moment
          .utc(moment.utc(Date.now()))
          .isSameOrAfter(moment.utc(item.duedate)) && item.status === 'current'
    );
      thisItem.status = "failure";
    this.props.props.updateThisItem(thisItem);
  };

  render() {
    let thisItem = this.props.props.items.find(
      item =>
        moment
          .utc(moment.utc(Date.now()))
          .isSameOrAfter(moment.utc(item.duedate)) && item.status === 'current'
    );
    if (thisItem) {
      return (
        <Container>
          <Header style={styles.headingBg}>
            <Body>
              <Title style={styles.heading}>MOMENT - OF - TRUTH</Title>
            </Body>
          </Header>
          <Text style={styles.prompt}>Did you complete:</Text>
          <Text style={styles.itemName}>
            {thisItem.title}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this._handleYes}>
              <View style={styles.buttonBlue}>
                <Text style={styles.buttonText}>Y</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._handleNo}>
              <View style={styles.buttonRed}>
                <Text style={styles.buttonText}>N</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.quote}>
              “Reality denied comes back to haunt.”
            </Text>
            <Text style={styles.quote}>― Philip K. Dick</Text>
          </View>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header style={styles.headingBg}>
            <Body>
              <Title style={styles.heading}>MOMENT - OF - TRUTH</Title>
            </Body>
          </Header>
          <H1 style={styles.prompt}>Loading...</H1>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "#c90000",
    fontSize: 12,
    letterSpacing: 10,
    fontWeight: "bold"
  },
  headingBg: {
    backgroundColor: "#ffffff",
    paddingBottom: 5
  },
  prompt: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20
  },
  itemName: {
    color: "rgb(189, 48, 59)",
    fontSize: 50,
    textAlign: "center",
    margin: 30
  },
  buttonBlue: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    borderRadius: 40,
    overflow: "hidden"
  },
  buttonRed: {
    height: 80,
    width: 80,
    backgroundColor: "#c90000",
    borderRadius: 40,
    overflow: "hidden"
  },
  buttonText: {
    fontSize: 60,
    textAlign: "center",
    color: "white",
    marginTop: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  },
  quote: {
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    margin: 5
  }
});
