import React from "react";
import ListPageLayout from "./ListPageLayout";
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

//functionalComponent
const ListPageComponent = ({ items }) =>
  <Container>
    <Content>
      <ListPageLayout items={items} />
    </Content>
  </Container>;
export default ListPageComponent;
