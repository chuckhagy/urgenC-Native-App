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


    render() {
        console.log(this.props, "<><><><><>");
        console.log('owner here', this.props.ownerUserId);
        return (
            <Content>
                <Form>
                    <Item stackedLabel>
                        <Label>Enter username below to add new member</Label>
                        <Input
                            name="newMemberName"
                            onChangeText={newMemberName => this.setState({newMemberName})}
                            value={this.state.newMemberName}
                        />
                    </Item>

                    <Container style={style.buttons}>
                        <Button
                            iconLeft
                            large
                            primary

                        >
                            <Icon name="send"/>
                            <Text>SAVE IT</Text>
                        </Button>
                        <Button
                            iconLeft
                            large
                            danger
                        >
                            <Icon name="trash"/>
                            <Text>CANCEL</Text>
                        </Button>
                    </Container>
                </Form>
                <Text style={style.subHeading}>Current Members:</Text>
                <MembersListComponent items={{username: 'chuck', status: 'pending'}}/>
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
    }
});
