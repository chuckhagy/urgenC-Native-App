import React from "react";
import { StyleSheet, View } from "react-native";
import StatsPageLayout from "./StatsPageLayout";
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

export default class StatsPageComponent extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.headingBg}>
          <Body>
            <Title style={styles.heading}>urgenC</Title>
          </Body>
        </Header>
        <Content style={styles.bg}>
          <StatsPageLayout props={this.props} />
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
  },
  bg: {
    backgroundColor: "#000000"
  }
});
