import React from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
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
        fontWeight: `bold`,
        fontSize: 22
      },
      bottom: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10
      }
    });

    return (
      <Content>
        <Card onPress={() => Actions.details([item, thisProps])}>
          <View>
            <Body>
              <Text style={styles.textColor}>
                {Math.round(item.rank * 100) || 0}
              </Text>
              <H1 onPress={() => Actions.details([item, thisProps])}>
                {item.title}
              </H1>
            </Body>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bold}>
              Stars: {item.priority}
            </Text>
            <Text style={styles.bold}>
              {item.displayTime}
            </Text>
          </View>
        </Card>
      </Content>
    );
  }
}
