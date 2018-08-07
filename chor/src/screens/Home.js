import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
      <Image
          source={require('../assets/images/logo.png')}
          />
          <Text style={styles.titleText}>Chor</Text>
          <Text style={styles.logoText}>Roomate tasks </Text>
          <View style={{position: 'absolute', bottom:0, display: 'flex', flexDirection: 'row', height: '10%', width: '100%'}} >
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Login')}

            style={{...styles.button, backgroundColor: 'black'}} >
            <Text 
              style={{...styles.buttonText, color: 'white'}}
              >LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{...styles.button, backgroundColor: '#E2FF00'}}
              >
              <Text
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{...styles.buttonText, color: 'black'}}
                >SIGN UP</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#000'
  },
  titleText: {
    paddingTop:20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
    logoText: {
    paddingBottom: 100,
      fontSize: 26,
      color: 'white'
    },
    button: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:20
    }, 
    buttonText: {
      fontWeight:'700',
    },
});
