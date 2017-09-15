import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';



export default class AddPageForm extends React.Component{
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
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
              <Text>AddPageHere</Text>
           </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}