import React from 'react';
import ListPageComponent from './ListPageComponent';
import DetailsPageComponent from './DetailsPageComponent';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


class ListPageRouter extends React.Component {

  
  render() {
    const items = this.props.items
    return (
      <ListPageComponent items={items} />
    );
  }
}

export default ListPageRouter;