import React from "react";
import moment from "moment";
import { StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Text,
  CheckBox,
  Container,
  ListItem,
  Body,
  Card,
  CardItem
} from "native-base";

export default class AddPageFormComponent extends React.Component {
  state = {
    id: "",
    title: "",
    body: "",
    duedate: "",
    priority: ""
  };

  _handleSubmit = event => {
    console.log("SUBMITING");
    this.props.props.createThisItem({
      title: this.state.title || "n/a",
      body: this.state.body || "n/a",
      duedate:
        this.state.duedate ||
        moment(Date.now()).add(1, "day").format("YYYY-MM-DD"),
      priority: this.state.priority || "3",
      createddate: moment(Date.now()).format("YYYY-MM-DD")
    });
    this.setState({
      id: "",
      title: "",
      body: "",
      duedate: "",
      priority: ""
    });
  };

  _handleCancel = () => {
    console.log("CANCEL");
    Actions.pop();
  };

  render() {
    return (
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>G O A L :</Label>
            <Input
              name="title"
              onChangeText={title => this.setState({ title })}
              value={this.state.title}
            />
          </Item>
          <Item stackedLabel>
            <Label>D E T A I L S :</Label>
            <Input
              onChangeText={body => this.setState({ body })}
              value={this.state.body}
            />
          </Item>
          <Item stackedLabel>
            <Label>D U E :</Label>
            <Input
              defaultValue={moment(Date.now())
                .add(1, "day")
                .format("YYYY-MM-DD")}
              onChangeText={duedate => this.setState({ duedate })}
              value={this.state.duedate}
            />
          </Item>
          <Item stackedLabel>
            <Label>P R I O R I T Y :</Label>
            <Input
              onChangeText={priority => this.setState({ priority })}
              value={this.state.priority}
            />
          </Item>
          <Container style={style.buttons}>
            <Button iconLeft large primary onPress={this._handleSubmit}>
              <Icon name="send" />
              <Text>SUBMIT</Text>
            </Button>
            <Button iconLeft large danger onPress={this._handleCancel}>
              <Icon name="trash" />
              <Text>CANCEL</Text>
            </Button>
          </Container>
        </Form>
      </Content>
    );
  }
}

const style = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 20
  },
  verify: {
    marginTop: 15,
    marginRight: 10
  },
  verifyCheck: {
    marginLeft: 6,
    marginRight: 15
  }
});
