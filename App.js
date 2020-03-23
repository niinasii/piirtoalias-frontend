import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ChatViesti from './src/components/ChatViesti'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Piirto alias</Text>
        <ChatViesti/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },
  welcome: {
  
  },
});
