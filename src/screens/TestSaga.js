import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import { logOut } from '../actions/user';

let styles 
const TestSaga = (props)=> {
  const {
    container, 
    text,
    button, 
    buttonText,
    mainContent
  } = styles
 console.tron.log(props, ':props')

 logoutHandler = (props) => {
     props.logOut()
     setTimeout(((() => {
         props.navigation.navigate('Landing');
     })),400)
 }

 return (
   <View style={container}>
    <TouchableHighlight style={{...button, width:100}} onPress={()=> logoutHandler(props)}>
     <Text style={buttonText}>LogOut</Text>
    </TouchableHighlight>
    <Text style={text}>My Trophies</Text>
    <TouchableHighlight style={{...button, width:100}} onPress={()=> props.fetchData()}>
    <Text style={buttonText}>My Trophies</Text>
    
    </TouchableHighlight>
    <View style={mainContent}>
    {
      props.appState.appData.isFetching && <Text>Loading</Text>
    }
    {
      props.appState.appData.data.length ? (
        props.appState.appData.data.map((person, i)=>{
          return <View key={i}>
          <Text>Chor Do-er: {person.name} </Text>
         <Text>Times Won: {person.age}</Text>
          </View>
        })
      ) : null
    }
    </View>
   </View>
 )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#429a1b'
  },
  buttonText: {
    color: 'black'
  },
  mainContent: {
    margin: 10
  }
})

function mapStateToProps (state) {
  return {
    appState: state
  }
}
function mapDispatchToProps(dispatch){
  return{
    fetchData: ()=> dispatch(fetchData()),
    logOut: ()=> dispatch(logOut())
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TestSaga)