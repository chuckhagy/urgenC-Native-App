import React from "react";
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
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
