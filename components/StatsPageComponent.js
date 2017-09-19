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
        <Content>
          <Header style={styles.headingBg}>
            <Body>
              <Title style={styles.heading}>urgenC</Title>
            </Body>
          </Header>
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
  }
});
