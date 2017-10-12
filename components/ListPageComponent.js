import React, { Component } from "react";
import sortBy from "lodash.sortby";
import ListPageLayout from "./ListPageLayout";
import ResponseComponent from "./ResponseComponent";
import { StyleSheet, View } from "react-native";

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
  Spinner
} from "native-base";

export default class ListPageComponent extends Component {
  componentDidMount() {
    this.refreshList = setInterval(() => this.refreshIt(), 100000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshList);
  }

  refreshIt() {
    this.props.refreshList();
  }

  render() {
    return (
      <Container>
        <Header style={styles.headingBg}>
          <Body>
            <Title style={styles.heading}>urgenC</Title>
          </Body>
        </Header>
        <Content>
          {this.props.modalOn
            ? <ResponseComponent props={this.props} />
            : <ListPageLayout
                items={sortBy(this.props.items, "rank").reverse()}
                props={this.props}
              />}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold"
  },
  headingBg: {
    backgroundColor: "#c90000",
    paddingBottom: 5
  }
});
