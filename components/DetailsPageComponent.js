import React from "react";
import DetailsPageLayout from "./DetailsPageLayout";
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

export default class DetailsPageComponent extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "black" }}>
          <Body>
            <Title style={{ color: "white", fontWeight: "bold" }}>
              Goal Details
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <DetailsPageLayout item={this.props} />
        </Content>
      </Container>
    );
  }
}
