import React from 'react';
import {StyleSheet, View} from 'react-native';
import MembersListComponent from './MembersListComponent'
import {
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Icon,
    Text,
    CheckBox,
    Container,
    ListItem,
    Card,
    CardItem,
    Body,
    Fab
} from "native-base";

export default class MembersPageComponent extends React.Component {

    state = {
        newMemberName: '',
    }


    _handleDelete = (rowData) => {
        this.props.delete(rowData.id)
    }

    render() {
        let theseAssignments = this.props.items.find(item => item.id === this.props.goalId).userAssignments
        // TODO console.log('owner here', this.props.ownerUserId);
        console.log('in PAGE level: all props', this.props)
        return (
            <Content>
                <Text style={style.subHeading}>Current Members:</Text>
                <MembersListComponent allMembers={theseAssignments}  delete={this.props.deleteAssignment.bind(this)}/>
                <Text style={style.subHeading}>Add New Member:</Text>
                <View style={style.addingToolsBg}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Enter username sbelow to add new member</Label>
                            <Input
                                name="newMemberName"
                                onChangeText={newMemberName => this.setState({newMemberName: newMemberName.toLowerCase()})}
                                value={this.state.newMemberName}
                            />
                        </Item>

                        <Container style={style.buttons}>
                            <Button
                                iconLeft
                                large
                                primary
                                disabled={this.state.newMemberName.length < 1}

                            >
                                <Icon name="send"/>
                                <Text>SAVE IT</Text>
                            </Button>
                            <Button
                                iconLeft
                                large
                                danger
                                disabled={this.state.newMemberName.length < 1}
                            >
                                <Icon name="trash"/>
                                <Text>CANCEL</Text>
                            </Button>
                        </Container>
                    </Form>
                </View>
            </Content>
        );
    }
}

const style = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        margin: 20,
        height: 60
    },
    verify: {
        marginTop: 15,
        marginRight: 10
    },
    verifyCheck: {
        marginLeft: 6,
        marginRight: 15
    },
    subHeading: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: 'bold'
    },
    addingToolsBg: {
        backgroundColor: "#ffffff",
        padding: 5
    },
});
