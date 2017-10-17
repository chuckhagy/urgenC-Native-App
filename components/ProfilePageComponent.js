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
        originalName: 'Chuck Hagy',
        name: 'Chuck Hagy',
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
                    <Image source={require('../images/user.png')} style={styles.image1}/>
                    <Text style={styles.title}>
                        {this.state.name}
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
                    {/*<Text>*/}
                        {/*E D I T:*/}
                    {/*</Text>*/}
                    <Form>
                        <Item>
                            <Label>DISPLAY NAME:</Label>
                            <Input
                                name="name"
                                onChangeText={name => this.setState({name})}
                                value={this.state.name}

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
                                disabled={this.state.originalName === this.state.name &&
                                this.state.originalStatus === this.state.status
                                }                            >
                                <Icon name="send" />
                                <Text>SAVE IT</Text>
                            </Button>
                            <Button
                                iconLeft
                                large
                                danger
                                disabled={this.state.originalName === this.state.name &&
                                this.state.originalStatus === this.state.status
                                }
                            >
                                <Icon name="trash" />
                                <Text>DELETE</Text>
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
        margin: 35,
        height: 60
    },
    profileBgTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileBgMiddle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: -55
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
        marginTop: 70,
        borderWidth: 4,
        borderColor: '#909090'
    },
    title: {
        fontSize: 50,
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
});
