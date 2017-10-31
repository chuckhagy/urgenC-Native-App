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
    Item,
    Input,
    Label
} from "native-base"

export default class LoginPageComponent extends React.Component {

    state = {
        username: '',
        password: ''
    };

    _handleLogin = () => {
        Actions.jump("list");
    }

    render() {
        return (

            <View style={styles.loginbg}>
                <Image source={require('../images/logo-small.png')}/>
                <Form>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="username"
                            onChangeText={username => this.setState({username})}
                            value={this.state.username}
                            placeholder='username'
                            style={styles.inputs}
                        />
                    </Item>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="password"
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            placeholder='password'
                            style={styles.inputs}

                        />
                    </Item>
                    <Button dark onPress={this._handleLogin} style={styles.spacing}>
                        <Text style={styles.buttonText}>
                            L O G I N
                        </Text>
                    </Button>
                    <Text style={styles.prompt}>
                        Don't have an account yet?
                    </Text>
                    <Button light onPress={this._handleLogin} style={styles.spacing}>
                        <Text style={styles.buttonTextTwo}>
                            CLICK HERE TO SIGNUP
                        </Text>
                    </Button>
                </Form>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginbg: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#c90000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacing: {
        flexDirection: 'row',
        width: 300,
        marginBottom: 25,
    },
    inputs: {
        backgroundColor: 'white'
    },
    prompt: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10
    },
    buttonTextTwo: {
        textAlign: 'center',
        letterSpacing: 4
    }
});

