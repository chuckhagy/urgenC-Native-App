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
    Text
} from "native-base"

export default class ProfilePageComponent extends React.Component {

    _handleLogin = () => {
        Actions.jump("list");
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
                        Chuck
                    </Text>
                </View>
                <View style={styles.profileBgMiddle}>
                    <Text>
                        Stats 1:
                    </Text>
                    <Text>
                        Stats 2:
                    </Text>
                    <Text>
                        Stats 3:
                    </Text>
                </View>
                <View style={styles.profileBgBottom}>
                    <Text>
                        Friend 1:
                    </Text>
                    <Text>
                        Friend 2:
                    </Text>
                    <Text>
                        Friend 3:
                    </Text>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    profileBgTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileBgMiddle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileBgBottom: {
        flex: 1,
        alignItems: 'center',

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
