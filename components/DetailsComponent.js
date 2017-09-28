import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import DatePicker from "react-native-datepicker";
import TickerComponent from "./TickerComponent";
import moment from "moment";

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
    duedate: moment
      .utc(this.props.item.data[0].duedate)
      .subtract(7, "hour")
      .format(),
    priority: this.props.item.data[0].priority
  };

  _handleSave = event => {
    this.props.item.data[1].updateThisItem({
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      duedate: moment.utc(this.state.duedate).add(7, "hour"),
      priority: this.state.priority
    });
  };

  _handleDelete = () => {
    this.props.item.data[1].deleteItem(this.state.id);
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
            <TickerComponent
              info={this.props.item.data[0]}
              style={style.heading}
            />
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
          <DatePicker
            style={{ width: 200 }}
            date={this.state.duedate}
            mode="datetime"
            placeholder="select date"
            // format="YYYY-MM-DD hh:mm"
            minDate={moment(Date.now()).format('YYYY-MM-DD')}
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

          <ListItem style={style.verify} onPress={this._checkHandle}>
            <CheckBox
              checked={this.state.checkBox}
              onPress={this._checkHandle}
              style={style.verifyCheck}
            />
            <Body>
              <Text>
                I promise myself that changing this goal will make my life better.
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
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
