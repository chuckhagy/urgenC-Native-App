import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, List, ListItem, H1 } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class ListItemComponent extends React.Component{
  state = {
    bodyVisibile: false
  }


render(){
  let items = {}
  if(this.props.items) items = this.props.items
  else items = {title: 'Title', body: 'N/A', duedate: 'N/A', stars: 'N/A' }
  
  
  return(
    <Content>
      <Card>
        <CardItem >
          <Body>
            <H1  onPress={() => Actions.details({title: 'THIS IS A PROP FROM THE CARD!!!'}) }>{items.title}</H1>
            <Text>{items.body}</Text>
            <Text>DUE: {items.duedate}</Text>
            <Text>Stars: {items.priority}</Text>
         </Body>
        </CardItem>
      </Card>
    </Content>
  )
}
}