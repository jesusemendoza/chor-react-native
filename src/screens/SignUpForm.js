import React, { Component } from 'react';
import {
   StyleSheet,
   SafeAreaView, 
   Text, 
   View,
  TextInput,
    TouchableOpacity,
  KeyboardAvoidingView } 
   from 'react-native';
   
   

export default class SignUpForm extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <SafeAreaView style={styles.signUpForm}>
      <View style={styles.signUpContentContainer}>
        
      <TextInput 
      style={styles.textInput} 
      autoCorrect={false} 
      autoCapitalize = 'none'
      placeholder="Name"
      />

      <TextInput 
      style={styles.textInput} 
      autoCorrect={false} 
      autoCapitalize = 'none'
      placeholder="Email"
 />

      <TextInput 
      style={styles.textInput}
      placeholder="Password"
      returnKeyType='go'
      autoCapitalize = 'none'
      secureTextEntry
      autoCorrect={false} 
      placeholder="Password"
      />

      <TextInput 
      style={styles.textInput}
      placeholder="Password"
      returnKeyType='go'
      secureTextEntry
      autoCorrect={false} 
      placeholder="Confirm Password"
      />

      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('MainApp')}
      style={styles.button}>
      <Text style={styles.buttonText}>SIGN UP</Text>
  
      </TouchableOpacity>
      </View>
        </SafeAreaView>
        </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  signUpForm: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
  },
  signUpContentContainer: {
    height: '90%',
    padding: 20,
    alignSelf: 'stretch',
    backgroundColor: '#FCFCFC'

  },
  // header: {
  //   fontSize: 18,
  //   color: '#59B78D',
  //   paddingTop: 10,
  
  // },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    color: '#363732',
    fontSize: 18,
   
  },
  buttonContainer: {
    width: '100%'
  },
  
  button: {
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59B78D',
    marginTop: 40,
    fontSize:25
  },
  buttonText: {
    color: '#FCFCFC',
    fontWeight: '700'
  }
});
