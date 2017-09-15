import React, { Component } from 'react'
import { View } from  'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card } from 'native-base';

import DetailsComponent from './DetailsComponent'

export default class DetailsPageLayout extends Component {

    render() {
        return (
            <Content>
              <DetailsComponent item={this.props.item} />
            </Content>
        )
    }
}
