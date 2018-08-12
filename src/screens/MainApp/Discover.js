import React, { Component } from 'react';
import {
   StyleSheet,
   SafeAreaView, 
   Text, 
   View,
   Image,
  TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView
} 
   from 'react-native';
import { testData } from './testData';

let styles;    
export default class Discover extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.teamName}>Team Name</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => console.tron.log('Create New Chor')}
                style={styles.button} >
                    <Text style={styles.buttonText}>+ Chor</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View style={styles.trophyContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.trophyImage}
                    source={require('../../assets/images/trophy.png')}
                    />
            </View>
        </View>
        <ScrollView style={styles.leaderContainer}>
            {/* <Image source={require('../../assets/images/chor-logo.png')}/> */}
            <FlatList
                data={testData}
                renderItem={({item}) => (
                    <View key={item.key} style={styles.listContainer}>
                        <Text style={styles.listItem}>{item.place}</Text>
                        <Text style={styles.listItem}>{item.name}</Text>
                        <Text style={styles.listItem}>{item.score}</Text>
                    </View>)}
                />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

styles = StyleSheet.create({
    container : {
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC',
    },
    headerContainer : {
        width: '100%',
        height:'10%',
        paddingTop: 20,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    teamName: {
        flex: 1,
        fontSize: 26,
        paddingLeft: 15,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#EF5D60',
        width: '70%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    trophyContainer : {
        width: '100%',
        height: '40%',
        paddingTop: 30,
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        width: '60%',
        alignItems: 'center',

    },
    trophyImage: {
        width: 180,
        height:180,
    },
    leaderContainer : {
        flex: 6,
        paddingTop: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    listContainer: {
        padding: 10,
        width: '100%',
        marginBottom:2,
        backgroundColor: '#7BD1AA',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    listItem: {
        flex:1,
        padding: 3,
        fontSize: 26,
        textAlign: 'center',
    }
})