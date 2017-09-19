import React from "react";
import { StyleSheet, View } from "react-native";
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
  Card,
  CardItem,
  Body
} from "native-base";

export default class DetailsComponent extends React.Component {
  state = {
    checkBox: false,
    id: this.props.item.data[0].id,
    title: this.props.item.data[0].title,
    body: this.props.item.data[0].body,
    duedate: this.props.item.data[0].duedate,
    priority: this.props.item.data[0].priority
  };

  _handleSave = event => {
    console.log("SAVING");
    this.props.item.data[1].updateThisItem({
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      duedate: this.state.duedate,
      priority: this.state.priority
    });
  };

  _handleDelete = () => {
    this.props.item.data[1].deleteItem(this.state.id);
    console.log("DELETING");
  };

  _checkHandle = () => {
    if (this.state.checkBox) this.setState({ checkBox: false });
    else this.setState({ checkBox: true });
  };
  render() {
    return (
      <Content>
        <Card>
          <Text style={style.heading}>
            M I N S - L E F T : {this.props.item.data[0].timeLeft}
          </Text>
        </Card>
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
          <ListItem style={style.verify} onPress={this._checkHandle}>
            <CheckBox
              checked={this.state.checkBox}
              onPress={this._checkHandle}
              style={style.verifyCheck}
            />
            <Body>
              <Text>
                I'm ready to give up on my future and change this goal like a
                total loser.
              </Text>
            </Body>
          </ListItem>
          <Container style={style.buttons}>
            <Button
              iconLeft
              large
              primary
              disabled={!this.state.checkBox}
              onPress={this._handleSave}
            >
              <Icon name="send" />
              <Text>SAVE IT</Text>
            </Button>
            <Button
              iconLeft
              large
              danger
              onPress={this._handleDelete}
              disabled={!this.state.checkBox}
            >
              <Icon name="trash" />
              <Text>DELETE</Text>
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
    margin: 20,
    height: 60
  },
  verify: {
    marginTop: 15,
    marginRight: 10
  },
  verifyCheck: {
    marginLeft: 6,
    marginRight: 15
  },
  heading: {
    color: "red",
    fontSize: 22,
    textAlign: "center",
    margin: 25
  }
});
