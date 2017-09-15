import React, { Component } from 'react'
import { View } from  'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card } from 'native-base';

import StatsComponent01 from './StatsComponent01'

export default class StatsPageLayout extends Component {

    render() {
        return (
            <Content>
              <StatsComponent01 />
            </Content>
        )
    }
}
