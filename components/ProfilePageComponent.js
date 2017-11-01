import React from "react";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
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
    Form,
    Input,
    Label,
    Item
} from "native-base"

export default class ProfilePageComponent extends React.Component {

    state = {
        originalDisplayName: this.props.authenticatedUser.displayName,
        originalEmail: this.props.authenticatedUser.email,
        originalColor: this.props.authenticatedUser.color,
        originalStatus: this.props.authenticatedUser.statusMessage,
        displayName: this.props.authenticatedUser.displayName,
        email: this.props.authenticatedUser.email,
        status: this.props.authenticatedUser.statusMessage,
        color: this.props.authenticatedUser.color
    }

    handleColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({color});
    }

    handleCancel = () => {
        this.setState(currentState => {
            return {
                color: currentState.originalColor,
                displayName: currentState.originalDisplayName,
                email: currentState.originalEmail,
                status: currentState.originalStatus
            }
        });
        Actions.list()
    }

    handleSave = () => {
        this.props.updateUserInfo({
            displayName: this.state.displayName,
            email: this.state.email,
            statusMessage: this.state.status,
            profileColor: this.state.color
        }).then(
            this.setState(currentState => {
                return {
                    originalColor: currentState.color,
                    originalDisplayName: currentState.displayName,
                    originalEmail: currentState.email,
                    originalStatus: currentState.status
                }
            })
        );
        Actions.list()
    };
    specialColor = () => {
        return {
            width: 160,
            height: 160,
            borderRadius: 80,
            marginTop: 30,
            borderWidth: 4,
            backgroundColor: this.state.color
        }
    };

    render() {
        return (
            <Container>
                <Header style={styles.headingBg}>
                    <Body>
                    <Title style={styles.heading}>urgenC</Title>
                    </Body>
                </Header>
                <View style={styles.profileBgTop}>
                    <TouchableOpacity onPress={this.handleColor}>
                        <View style={this.specialColor()}>
                            <View style={styles.transparent}>
                                <Text style={styles.initials}>
                                    {this.state.displayName.charAt(0) ? this.state.displayName.charAt(0) : null}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {this.state.firstName} {this.state.lastName}
                    </Text>
                </View>
                <View style={styles.profileBgMiddle}>
                    <Text style={styles.textMiddle}>
                        @chuckhagy
                    </Text>
                    <Text style={styles.textMiddle}>
                        "{this.state.status}"
                    </Text>
                </View>
                <View style={styles.profileBgBottom}>
                    <Form>
                        <Item>
                            <Label>NAME:</Label>
                            <Input
                                name="displayName"
                                onChangeText={displayName => this.setState({displayName})}
                                value={this.state.displayName}

                            />
                        </Item>
                        <Item>
                            <Label>EMAIL:</Label>
                            <Input
                                name="email"
                                onChangeText={email => this.setState({email})}
                                value={this.state.email}

                            />
                        </Item>
                        <Item>
                            <Label>STATUS:</Label>
                            <Input
                                name="status"
                                onChangeText={status => {
                                    this.setState({status})
                                }}
                                value={this.state.status}
                            />
                        </Item>
                        <Container style={styles.buttons}>
                            <Button
                                onPress={this.handleSave}
                                iconLeft
                                large
                                primary
                                disabled={this.state.originalDisplayName === this.state.displayName &&
                                this.state.originalEmail === this.state.email &&
                                this.state.originalStatus === this.state.status &&
                                this.state.originalColor === this.state.color
                                }>
                                <Icon name="send"/>
                                <Text>SAVE IT</Text>
                            </Button>
                            <Button
                                onPress={this.handleCancel}
                                iconLeft
                                large
                                danger
                                disabled={this.state.originalDisplayName === this.state.displayName &&
                                this.state.originalEmail === this.state.email &&
                                this.state.originalStatus === this.state.status &&
                                this.state.originalColor === this.state.color

                                }
                            >
                                <Icon name="trash"/>
                                <Text>CANCEL</Text>
                            </Button>
                        </Container>
                    </Form>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginRight: 35,
        marginLeft: 35,
        marginTop: 15,
        height: 60
    },
    initials: {
        color: 'white',
        textAlign: 'center',
        fontSize: 110,
        textShadowColor: 'black',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3
    },
    profileBgTop: {
        flex: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileBgMiddle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -85,
        marginBottom: -75
    },
    textMiddle: {
        fontSize: 16,
        fontStyle: 'italic',
        paddingBottom: 25,
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 25
    },
    profileBgBottom: {
        flex: 1,
    },
    profileBg: {
        flex: 1,
        padding: 20,
    },
    image1: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginTop: 30,
        borderWidth: 4,
    },
    title: {
        fontSize: 35,
        marginTop: 10,
        fontWeight: '100',

    },
    heading: {
        color: "#ffffff",
        fontSize: 26,
        fontWeight: "bold"
    },
    headingBg: {
        backgroundColor: "#c90000",
        paddingBottom: 5
    },
    transparent: {
        backgroundColor: 'rgba(0,0,0,0)',
        margin: 10
    },
});
