import React from 'react';
import HistoryPageLayout from './HistoryPageLayout';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Link } from 'react-router-native'

export default class HistoryPageComponent extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'rgb(155, 200, 252)' }}>
          <Body>
            <Title style={{ color: 'white', fontWeight: 'bold' }}>Complete History</Title>
          </Body>
          <Right />
        </Header>
      <Content>
        <HistoryPageLayout
          items={this.props.items}
        />
      </Content>
    </Container>
    );
  }
}