import React from 'react';
import StatsPageLayout from './StatsPageLayout';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Link } from 'react-router-native'

export default class StatsPageComponent extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'rgb(155, 200, 252)' }}>
          <Body>
            <Title style={{ color: 'white', fontWeight: 'bold' }}>Your Stats</Title>
          </Body>
          <Right />
        </Header>
      <Content>
        <StatsPageLayout
          items={this.props.items}
        />
      </Content>
    </Container>
    );
  }
}