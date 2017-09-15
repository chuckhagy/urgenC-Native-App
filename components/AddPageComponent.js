import React from 'react';
import AddPageLayout from './AddPageLayout';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class AddPageComponent extends React.Component {
  render() {
      return (
      <Container>
        <Header style={{ backgroundColor: 'rgb(155, 200, 252)' }}>
          <Body>
            <Title style={{ color: 'white', fontWeight: 'bold' }}>Add New Task</Title>
          </Body>
          <Right />
        </Header>
      <Content>
        <AddPageLayout />
      </Content>
    </Container>
    );
  }
}