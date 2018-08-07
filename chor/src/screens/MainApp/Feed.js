import React, { Component } from 'react';
import {
   StyleSheet,
   SafeAreaView, 
   Text, 
   View,
  TextInput,
    TouchableOpacity } 
   from 'react-native';

export default class Discover extends Component {
  render() {
    return (
      <SafeAreaView Style={{height: '100%', width: '100%'}}>
        <Text style={{fontSize: 100}}>Feed</Text>
      </SafeAreaView>
    );
  }
}