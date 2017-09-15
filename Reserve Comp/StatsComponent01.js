import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';



export default class StatsComponent01 extends React.Component{
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
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
              <Text>Stats Here</Text>
           </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}