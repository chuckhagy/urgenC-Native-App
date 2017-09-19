import React from "react";
import AddPageLayout from "./AddPageLayout";
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

export default class AddPageComponent extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <AddPageLayout props={this.props} />
        </Content>
      </Container>
    );
  }
}
