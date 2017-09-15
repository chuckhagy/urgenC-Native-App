import React from 'react';
import ListPageLayout from './ListPageLayout';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class ListPageComponent extends React.Component {
    
  render() {
    return (
    <Container>
    <Content>
      <ListPageLayout items={this.props.items}/>
    </Content>
    </Container>
    );
  }
}

export default ListPageComponent