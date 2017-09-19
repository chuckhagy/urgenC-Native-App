import React from "react";
import sortBy from "lodash.sortby";
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

// console.log(items, "<<<<<<<<<<< PreSorted");
// items = sortBy(items, "priority");

const ListPageComponent = props =>
  <Container>
    <Content>
      <ListPageLayout items={props.items} props={props} />
    </Content>
  </Container>;
export default ListPageComponent;
