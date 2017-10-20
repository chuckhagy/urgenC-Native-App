import React from "react";
import {StyleSheet, View, Image} from "react-native";
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
        originalFirstName: 'Chuck',
        originalLastName: 'Hagy',
        firstName: 'Chuck',
        lastName: 'Hagy',
        originalStatus: 'Krushing It BROS!!',
        status: "Krushing It BROS!!",
        different: false
    }


    render() {
        return (
            <Container>
                <Header style={styles.headingBg}>
                    <Body>
                    <Title style={styles.heading}>urgenC</Title>
                    </Body>
                </Header>
                <View style={styles.profileBgTop}>
                    <View style={styles.image1}>
                        <View style={styles.transparent}>
                            <Text style={styles.initials}>
                                {this.state.firstName.charAt(0) ? this.state.firstName.charAt(0) : this.state.lastName.charAt(0)}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.title}>
                        {this.state.firstName} {this.state.lastName}
                    </Text>
                </View>
                <View style={styles.profileBgMiddle}>
                    <Text style={styles.textMiddle}>
                        @chuckhagy
                    </Text>
                    <Text style={styles.textMiddle}>
                        {this.state.status}
                    </Text>
                </View>
                <View style={styles.profileBgBottom}>
                    <Form>
                        <Item>
                            <Label>FIRST NAME:</Label>
                            <Input
                                name="firstName"
                                onChangeText={firstName => this.setState({firstName})}
                                value={this.state.firstName}

                            />
                        </Item>
                        <Item>
                            <Label>LAST NAME:</Label>
                            <Input
                                name="lastName"
                                onChangeText={lastName => this.setState({lastName})}
                                value={this.state.lastName}

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
                                iconLeft
                                large
                                primary
                                disabled={this.state.originalFirstName === this.state.firstName &&
                                this.state.originalLastName === this.state.lastName &&
                                this.state.originalStatus === this.state.status
                                }>
                                <Icon name="send"/>
                                <Text>SAVE IT</Text>
                            </Button>
                            <Button
                                iconLeft
                                large
                                danger
                                disabled={this.state.originalFirstName === this.state.firstName &&
                                this.state.originalLastName === this.state.lastName &&
                                this.state.originalStatus === this.state.status
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
        fontSize: 110
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
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 25
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
        borderColor: '#909090',
        backgroundColor: 'blue'
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
