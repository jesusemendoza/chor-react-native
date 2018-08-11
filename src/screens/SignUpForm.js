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
        
      <Text style={styles.header}>Name</Text>
      <TextInput 
      style={styles.textInput} 
      autoCorrect={false} 
      autoCapitalize = 'none'
      placeholder="Name"
      />

      <Text style={styles.header}>Primary Contact Email</Text>
      <TextInput 
      style={styles.textInput} 
      autoCorrect={false} 
      autoCapitalize = 'none'
      placeholder="Email"
 />

      <Text style={styles.header}>Password</Text>
      <TextInput 
      style={styles.textInput}
      placeholder="Password"
      returnKeyType='go'
      autoCapitalize = 'none'
      secureTextEntry
      autoCorrect={false} 
      placeholder="Password"
      />

      <Text 
      style={styles.header}>Confirm Password</Text>
      <TextInput 
      style={styles.textInput}
      placeholder="Password"
      returnKeyType='go'
      secureTextEntry
      autoCorrect={false} 
      placeholder="Confirm Password"
      />

      </View>
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('MainApp')}
      style={styles.button}>
      <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
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
    width: '100%',
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
  },
  signUpContentContainer: {
    height: '80%',
    padding: 10,
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 10,
    color: '#59B78D',
    paddingTop: 20,
  
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    color: '#363732',
    fontSize: 10,
   
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59B78D',
    marginTop: 100,
    fontSize:20
  }
});
