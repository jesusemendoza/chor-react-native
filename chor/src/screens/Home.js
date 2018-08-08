import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
      <Image
          source={require('../assets/images/chor-logo.png')}
          />
         
          <View style={{position: 'absolute', bottom:0, display: 'flex', flexDirection: 'row', height: '10%', width: '100%'}} >
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Login')}

            style={{...styles.button, backgroundColor: 'black'}} >
            <Text 
              style={{...styles.buttonText, color: '#429a1b'}}
              >LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{...styles.button, backgroundColor: '#429a1b'}}
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
