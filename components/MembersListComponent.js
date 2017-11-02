import React, {Component} from "react";
import {ListView, View, StyleSheet} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Spinner,
    Fab,
    Card
} from "native-base";
import {Actions} from "react-native-router-flux";

export default class MembersListComponent extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['chuckhagy', 'jasonhsu', 'bobross']),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Card><Body><Text style={styles.nameText}>{rowData}</Text></Body></Card>}
            />
        );
    }
}

const styles = {
    nameText: {
        padding: 10,
        fontSize: 22
    }
}