import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import ChatViesti from './src/components/ChatViesti'
import ArvattavaSana from './src/components/ArvattavaSana';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Piirto Alias</Text>
        <ArvattavaSana />
        <ChatViesti />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "60 %",
    textAlign: "center",
    left: "30 %",
    fontSize: 20,
    textTransform: "uppercase",
    color: "black",
    letterSpacing: 1,
    textShadowRadius: 10,
    top: 0,
},
  welcome: {

}
})