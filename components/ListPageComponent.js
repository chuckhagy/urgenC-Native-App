import React from "react";
import sortBy from "lodash.sortby";
import ListPageLayout from "./ListPageLayout";
import rankMaker from "../logic/rankMaker";

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
    {props.updateTimes()}
    <Content>
      <ListPageLayout
        items={sortBy(props.items, "rank").reverse()}
        props={props}
      />
    </Content>
  </Container>;
export default ListPageComponent;
