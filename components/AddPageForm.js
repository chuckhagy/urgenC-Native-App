import React from "react";
import moment from "moment";
import { StyleSheet, View, Picker } from "react-native";
import { Actions } from "react-native-router-flux";
import DatePicker from "react-native-datepicker";

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
    this.props.props.createThisItem({
      title: this.state.title || "n/a",
      body: this.state.body || "n/a",
      duedate:
        moment.utc(this.state.duedate).add(7, "hour") || //deals with utc?
        moment.utc(Date.now()).add(1, "day"),
      priority: this.state.priority || "3",
      createddate: moment.utc(Date.now())
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
    this.setState({
      id: "",
      title: "",
      body: "",
      duedate: "",
      priority: ""
    });
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
          <DatePicker
            style={{ width: 200 }}
            date={this.state.duedate}
            mode="datetime"
            placeholder="select date"
            // format="YYYY-MM-DD"
            minDate={moment(Date.now()).format()}
            maxDate="2050-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 5
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={date => {
              this.setState({ duedate: date });
            }}
          />

          <Picker
            selectedValue={this.state.priority}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ priority: itemValue })}
          >
            <Picker.Item label="❗️" value="1" />
            <Picker.Item label="❗️❗️" value="2" />
            <Picker.Item label="❗️❗️❗️" value="3" />
            <Picker.Item label="❗️❗️❗️❗️" value="4" />
            <Picker.Item label="❗️❗️❗️❗️❗️" value="5" />
          </Picker>

          <Container style={style.buttons}>
            <Button
              iconLeft
              large
              primary
              onPress={this._handleSubmit}
              disabled={this.state.title.length === 0}
            >
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
