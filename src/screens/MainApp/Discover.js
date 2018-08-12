import React, { Component } from 'react';
import {
   StyleSheet,
   SafeAreaView, 
   Text, 
   View,
   Image,
  TextInput,
    TouchableOpacity
} 
   from 'react-native';

let styles;    
export default class Discover extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={{fontSize: 25, textAlign: 'center', margin: 'auto'}}>Team Name</Text>
        </View>
        <View style={styles.trophyContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.trophyImage}
                    source={require('../../assets/images/trophy.png')}
                    />
            </View>
        </View>
        <View style={styles.leaderContainer}>
            <Image source={require('../../assets/images/chor-logo.png')}/>
        </View>
      </SafeAreaView>
    );
  }
}

styles = StyleSheet.create({
    container : {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    headerContainer : {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        textAlign: 'center',
    },
    trophyContainer : {
        flex: 3,
        width: '100%',
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        width: '60%',
        backgroundColor: 'red',
        alignItems: 'center',

    },
    trophyImage: {
        width: 180,
        height:180,
    },
    leaderContainer : {
        flex: 6,
        width: '100%',
        backgroundColor: 'orange',
        display: 'flex',
    }
})