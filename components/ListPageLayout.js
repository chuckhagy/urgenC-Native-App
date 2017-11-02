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
    Fab
} from "native-base";
import {Actions} from "react-native-router-flux";

import ListItemComponent from "./ListItemComponent";

const rowHasChanged = (r1, r2) =>
    r1.id !== r2.id ||
    r1.title !== r2.title ||
    r1.duedate !== r2.duedate ||
    r1.priority !== r2.priority ||
    r1.rating !== r2.rating;
const ds = new ListView.DataSource({rowHasChanged});

export default class ListPageLayout extends Component {
    state = {
        dataSource: ds.cloneWithRows(
            this.props.items.filter(a => {
                return a.status === 'current';
            })
        )
    };

    renderRow = rowData => {
        return <ListItemComponent items={rowData} props={this.props.props}/>;
    };

    componentWillReceiveProps(newProps) {
        if (newProps.items !== this.props.items) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(
                    newProps.items.filter(a => {
                        return a.status === 'current';
                    })
                )
            });
        }
    }

    render() {
        if (this.props.items.length === 0) return (
            <Spinner color='red' style={styles.spinner}/>
        )
        else
            return (
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        enableEmptySections={true}
                        removeClippedSubviews={false}
                    />
                </Content>
            );
    }
}

const styles = StyleSheet.create({
    spinner: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '60%'
    }
});
