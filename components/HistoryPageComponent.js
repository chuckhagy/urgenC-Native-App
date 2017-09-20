import React from "react";
import sortBy from "lodash.sortby";
import HistoryPageLayout from "./HistoryPageLayout";
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
  Text
} from "native-base";

const ListPageComponent = props =>
  <Container>
    <Content>
      <Header style={styles.headingBg}>
        <Body>
          <Title style={styles.heading}>urgenC</Title>
        </Body>
      </Header>
      <HistoryPageLayout
        items={sortBy(props.items, "priority").reverse()}
        props={props}
      />
    </Content>
  </Container>;
export default ListPageComponent;

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
