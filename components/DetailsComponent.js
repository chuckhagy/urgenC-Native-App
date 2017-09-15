import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, H2 } from 'native-base';



export default class DetailsComponent extends React.Component{
  state = {
    bodyVisibile: false
  }
  render(){
    return(
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{this.props.item.title}</Text>
              <Text>BODY: {this.props.item.body}</Text>
              <Text>DUE: {this.props.item.duedate}</Text>
              <Text>PRIORITY: {this.props.item.priority}</Text>
              <H2>Edit</H2>
              <H2>Delete</H2>
           </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}