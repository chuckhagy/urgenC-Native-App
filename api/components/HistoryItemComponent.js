import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import TickerComponent from "./TickerComponent";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  List,
  ListItem,
  Badge,
  View,
  H1
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class HistoryItemComponent extends React.Component {
  render() {
    let item = {};
    if (this.props.items) item = this.props.items;
    else item = { title: "Title", body: "N/A", duedate: "N/A", stars: "N/A" };
    let thisProps = this.props.props;

    let stars = "";
    switch (item.priority) {
      case "1":
        stars = "☠️";
        break;
      case "2":
        stars = "☠️☠️";
        break;
      case "3":
        stars = "☠️☠️☠️";
        break;
      case "4":
        stars = "☠️☠️☠️☠️";
        break;
      case "5":
        stars = "☠️☠️☠️☠️☠️";
        break;
    }

    const styles = StyleSheet.create({
      bold: {
        fontSize: 18
      },
      justBold: {
        fontWeight: `bold`,
        color: "white"
      },
      bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
      },
      bg: {
        backgroundColor: "black"
      }
    });

    return (
      <Card style={styles.bg}>
        <View style={styles.bottom}>
          <Text style={styles.justBold}>
            {item.title}
          </Text>
          <Text style={styles.bold}>
            {stars}
          </Text>
        </View>
      </Card>
    );
  }
}
