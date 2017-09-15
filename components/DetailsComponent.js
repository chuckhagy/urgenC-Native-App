import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';



export default class DetailsComponent extends React.Component{
  state = {
    bodyVisibile: false
  }
  render(){
    let items = this.props.items
    return(
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{this.props.props.props.title}</Text>
              <Text>Note</Text>
              <Text>Due</Text>
              <Text>Stars</Text>
              <Text>Stats</Text>
              <Text>Edit</Text>
              <Text>Delete</Text>
           </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}