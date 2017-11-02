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


const rowHasChanged = (r1, r2) =>
    r1.id !== r2.id ||
    r1.displayName !== r2.displayName ||
    r1.profileColor !== r2.profileColor ||
    r1.status !== r2.status;

const ds = new ListView.DataSource({rowHasChanged});

export default class MembersListComponent extends Component {

    state = {
        dataSource: ds.cloneWithRows(
            this.props.allMembers
        )
    };

    componentWillReceiveProps(newProps) {
        if (newProps.allMembers !== this.props.allMembers) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(
                    newProps.allMembers
                )
            });
        }
    }

    renderRow = rowData => {
        return (
            <Card>
                <Body>
                <View style={styles.cardBody}>
                    <View style={styles.containerLeft}>
                        <View style={styles.containerLeftTop}>
                            <Text style={styles.nameText}>
                                {rowData.displayName.trim()}
                            </Text>
                            <Text style={styles.usernameText}>
                                (@{rowData.username.trim()})
                            </Text>
                        </View>
                        <Text style={styles.statusText}>
                            Status: {rowData.status.trim()}
                        </Text>
                    </View>
                    <View style={styles.containerRight}>
                        <Text style={styles.xText}>
                            X
                        </Text>
                    </View>
                </View>
                </Body>
            </Card>
        )
    };

    render() {
        console.log(this.props, 'IN LIST')
        if (this.props.allMembers.length === 0) return (
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

const styles = {
    nameText: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    statusText: {
        fontSize: 14,
    },
    xText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c90000'

    },
    usernameText: {
        fontSize: 14,
        fontStyle: "italic",
        marginLeft: 6

    },
    cardBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerLeft: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 15

    },
    containerLeftTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    containerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 20
    }
}