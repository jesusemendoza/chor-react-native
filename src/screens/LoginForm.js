import React, { Component } from 'react';
import {
   StyleSheet, 
   Text, 
   View,
   SafeAreaView,
   TextInput,
   TouchableOpacity   } 
   from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.LoginForm}>
        <View style={styles.LoginContentContainer}>
          <Text style={styles.header}>Email</Text>
          <TextInput 
          style={styles.textInput} 
          autoCorrect={false} 
          autoCapitalize = "none"
          placeholder="email@yahoo.com"
          />
    
          <Text style={styles.header}>Password</Text>
          <TextInput style={styles.textInput}
          placeholder="Password"
          returnKeyType="go"
          autoCapitalize = "none"
          secureTextEntry
          autoCorrect={false}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('MainApp')}
            style={styles.button} >
            <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  LoginForm: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',

    
  },
  LoginContentContainer: {
    padding: 30,
    height: '50%',
    alignSelf: 'stretch',
    backgroundColor: '#000'
  },
  header: {
    flex: 1,
    fontSize: 12,
    color: '#429a1b',
    height:30,
    paddingBottom:10

  },
  textInput: {
    alignSelf: 'stretch',
    color: '#429a1b',
    fontSize: 20
    
  },
  buttonContainer: {
    width: '100%'
  },
  
  button: {
    width: '60%',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#429a1b',
    marginTop: 40,
    fontSize:25
  },
  buttonText: {
    color: 'white',
    fontWeight: '700'
  }
});
