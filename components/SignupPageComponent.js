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
import signupMethod from '../api/signup'

export default class LoginPageComponent extends React.Component {

    state = {
        username: '',
        password: '',
        email: '',
        displayName: '',
        connectionDown: false,
    };

    _handleCreate = () => {
        this.setState({connectionDown: false});
        newUser = {
            displayName: this.state.displayName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        }
        signupMethod(newUser)
            .then(message => {
                Actions.pop()
            })
            .catch(error => {
                if (error.message === 'Network request failed') this.setState({connectionDown: true})
            })
    }

    _handleBack = () => {
        Actions.pop()
    }

    render() {
        return (
            <View style={styles.loginbg}>
                <Text style={styles.title}>
                    New Account
                </Text>
                <Form>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="displayName"
                            onChangeText={displayName => this.setState({displayName: displayName})}
                            value={this.state.displayName}
                            placeholder='name'
                            style={styles.inputs}
                            autoCorrect={false}
                        />
                    </Item>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="email"
                            onChangeText={email => this.setState({email: email.toLowerCase()})}
                            value={this.state.email}
                            placeholder='email'
                            style={styles.inputs}
                            autoCorrect={false}
                        />
                    </Item>
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
                    {this.state.connectionDown ? <Text style={styles.errorStyle}>No connection. Try again later.</Text> : null}
                    <Button dark onPress={this._handleCreate} style={styles.spacing2}
                            disabled={
                                this.state.displayName.length <= 1 ||
                                this.state.username.length <= 2 ||
                                this.state.password.length <= 5 ||
                                this.state.email.length <= 5 ||
                                !/(.+)@(.+){2,}\.(.+){2,}/.test(this.state.email)
                            }
                    >
                        <Icon name='md-add' style={styles.icon}/>
                        <Text style={styles.buttonText}>
                            CREATE ACCOUNT
                        </Text>
                    </Button>
                    <Button light onPress={this._handleBack} style={styles.spacing}>
                        <Icon name='md-arrow-back' style={styles.icon}/>
                        <Text style={styles.buttonText}>
                            BACK
                        </Text>
                    </Button>
                </Form>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: '300',
        marginBottom: 25,
    },
    loginbg: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#c90000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    spacing: {
        flexDirection: 'row',
        width: 300,
        marginBottom: 20,
    },
    spacing2: {
        flexDirection: 'row',
        width: 300,
        marginBottom: 15,
        marginTop: 30
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
    },
    errorStyle: {
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold',
        margin: 5,
    }
});

