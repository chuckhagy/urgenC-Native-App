import React from "react";
import { StyleSheet } from "react-native";
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
    r = item.rank * 255 + 50;
    if (item.rank > 0.8) g = 0;
    else g = 1 / item.rank * 100;
    if (item.rank > 0.4) b = 0;
    else b = 1 / item.rank * 80;

    let thisColor = "";
    if (item.rank < 0.5) thisColor = "black";
    else thisColor = "white";

    const styles = StyleSheet.create({
      border: {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
      },
      textColor: {
        color: `${thisColor}`
      }
    });

    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <H1 onPress={() => Actions.details([item, thisProps])}>
                {item.title}
              </H1>
              <Text>
                {item.body}
              </Text>
              <Text>
                DUE: {item.duedate}
              </Text>
              <Text>
                Stars: {item.priority}
              </Text>
              <Text>
                Days Left: {(item.timeLeft / 1440).toFixed(2)}
              </Text>
              <Text>
                Total Days: {(item.totalTime / 1440).toFixed(2)}
              </Text>
              <Badge style={styles.border}>
                <Text style={styles.textColor}>
                  {Math.round(item.rank * 100) || 0}
                </Text>
              </Badge>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
