import React, { Component } from "react";
import { View } from "react-native";
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
  Card
} from "native-base";

import AddPageForm from "./AddPageForm";

export default class AddPageLayout extends Component {
  render() {
    return (
      <Content>
        <AddPageForm props={this.props.props} />
      </Content>
    );
  }
}
