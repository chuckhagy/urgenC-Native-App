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
        password: '',
        tryAgain: false,
        connectionDown: false,
    };

    _handleLogin = () => {
        this.setState({tryAgain: false});
        this.setState({connectionDown: false});
        this.props.tokenAttempt(this.state)
            .then( promise =>{
                this.setState({username: '', password: ''});
                return promise
            })
            .catch(error => {
                if (error.message === 'Invalid token specified') this.setState({tryAgain: true})
                if (error.message === 'Network request failed') this.setState({connectionDown: true})
                else console.log(error.message)
            });

    }

    _handleSignup = () => {
        Actions.push('signup')
    }

    render() {
        return (
            <View style={styles.loginbg}>
                <Image source={require('../images/logo-small.png')} style={styles.spacing1}/>
                <Form>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="username"
                            onChangeText={username => this.setState({username: username.toLowerCase()})}
                            value={this.state.username}
                            placeholder='username'
                            style={styles.inputs}
                            autoCorrect={false}
                        />
                    </Item>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="password"
                            onChangeText={password => this.setState({password: password})}
                            value={this.state.password}
                            placeholder='password'
                            style={styles.inputs}
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                    </Item>
                    {this.state.tryAgain ? <Text style={styles.errorStyle}>Username or password incorrect.</Text> : null}
                    {this.state.connectionDown ? <Text style={styles.errorStyle}>No connection. Try again later.</Text> : null}

                    <Button dark onPress={this._handleLogin} style={styles.spacing}
                            disabled={
                                this.state.username.length < 1 ||
                                this.state.password.length < 1
                            }
                    >
                        <Text style={styles.buttonText}>
                            LOGIN
                        </Text>
                        <Icon name='md-arrow-forward' style={styles.icon}/>
                    </Button>
                    <Text style={styles.prompt}>
                        Don't have an account yet?
                    </Text>
                    <Button light onPress={this._handleSignup} style={styles.spacing}>
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
    spacing1: {
        marginBottom: 30,
        marginTop: 30,
    },
    inputs: {
        backgroundColor: 'white'
    },
    prompt: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
        marginBottom: 10,
        color: 'white'
    },
    buttonTextTwo: {
        textAlign: 'center',
        letterSpacing: 4
    },
    errorStyle: {
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold',
        margin: 5,
    }
});

