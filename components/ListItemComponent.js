import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import moment from "moment";
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
  H1
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class ListItemComponent extends React.Component {
  state = {
    bodyVisibile: false
  };

  render() {
    let item = {};
    if (this.props.items) item = this.props.items;
    else item = { title: "Title", body: "N/A", duedate: "N/A", stars: "N/A" };
    let thisProps = this.props.props;

    var r = 0;
    var g = 0;
    var b = 0;
    if (item.rank) {
      r = item.rank * 255 + 50;
      if (item.rank > 0.8) g = 0;
      else g = 1 / item.rank * 100;
      if (item.rank > 0.4) b = 0;
      else b = 1 / item.rank * 80;
    }

    let stars = "";
    switch (item.priority) {
      case "1":
        stars = "❗️";
        break;
      case "2":
        stars = "❗️❗️";
        break;
      case "3":
        stars = "❗️❗️❗️";
        break;
      case "4":
        stars = "❗️❗️❗️❗️";
        break;
      case "5":
        stars = "❗️❗️❗️❗️❗️";
        break;
    }

    const styles = StyleSheet.create({
      textColor: {
        // color: `rgb(${r}, ${g}, ${b})`,
        color: `rgb(255, 255, 255)`,
        fontSize: 12,
        textAlign: "left"
      },
      bg: {
        backgroundColor: `blue`
      },
      bold: {
        fontSize: 18
      },
      box: {
        borderColor: `rgb(${r}, ${g}, ${b})`,
        borderBottomWidth: 3,
        padding: 4,
        width: 115,
        height: 32
      },
      justBold: {
        fontWeight: `bold`
      },
      bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
      }
    });

    return (
      <Content>
        <View onPress={() => Actions.details([item, thisProps])}>
          <TouchableOpacity onPress={() => Actions.details([item, thisProps])}>
            <Card>
              <Body>
                <Text style={styles.textColor}>
                  {Math.round(item.rank * 100) || 0}
                </Text>
                <H1 style={styles.justBold}>
                  {item.title}
                </H1>
              </Body>
              <View style={styles.bottom}>
                <Text style={styles.bold}>
                  {stars}
                </Text>
                <View style={styles.box}>
                  <TickerComponent
                    info={this.props.items}
                    style={styles.bold}
                    updateThisItem={this.props.props.updateThisItem}
                  />
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}
