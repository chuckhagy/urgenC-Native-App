import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Blue extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => Actions.add()} >BLUE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
