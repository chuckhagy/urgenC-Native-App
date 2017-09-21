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

import StatsPageForm from "./StatsPageForm";

export default class StatsPageLayout extends Component {
  render() {
    return (
      <Content>
        <StatsPageForm props={this.props.props} />
      </Content>
    );
  }
}
