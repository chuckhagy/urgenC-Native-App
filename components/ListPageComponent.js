import React from 'react';
import ListPageLayout from './ListPageLayout';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

// class ListPageComponent extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//     
//   render() {
//     console.log(this.props.items, 'INSIDE 1 level <<<<<<<<<<<<<<<<<<<<<')
//     return (
//     <Container>
//     <Content>
//       <ListPageLayout items={this.props.items}/>
//     </Content>
//     </Container>
//     );
//   }
// }


const ListPageComponent = ({items}) => (
  <Container>
  <Content>
    {    console.log(items, 'INSIDE 1 level <<<<<<<<<<<<<<<<<<<<<')}
    <ListPageLayout items={items}/>
  </Content>
  </Container>
)
export default ListPageComponent