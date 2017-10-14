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

export default class LoginPageComponent extends React.Component {

    _handleLogin = () => {
        Actions.jump("list");
    }

    render() {
        return (
            <View style={styles.loginbg}>
                <View style={styles.centerA}>
                    <Image source={require('../images/logo-small.png')} />
                </View>
                <View style={styles.centerB}>
                <Button dark onPress={this._handleLogin}>
                    <Text style={styles.logintxt}>
                        L O G I N
                    </Text>
                </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginbg: {
        flex: 1,
        backgroundColor: '#c90000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerA: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerB: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginbutton: {
        flex: 3,
        alignSelf: "center",
        width: '150',
    },
    logintxt: {
        color: "white",
    }
});
