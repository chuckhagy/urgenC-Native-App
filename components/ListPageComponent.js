import React from "react";
import sortBy from "lodash.sortby";
import ListPageLayout from "./ListPageLayout";
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
      <ListPageLayout
        items={sortBy(props.items, "rank").reverse()}
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
