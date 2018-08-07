import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';

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

 return (
   <View style={container}>
    <Text style={text}>My Playlist</Text>
    <TouchableHighlight style={{...button, width:100}}onPress={()=> props.fetchData()}>
    <Text style={buttonText}>My Albums</Text>
    
    </TouchableHighlight>
    <View style={mainContent}>
    {
      props.appData.isFetching && <Text>Loading</Text>
    }
    {
      props.appData.data.length ? (
        props.appData.data.map((person, i)=>{
          return <View key={i}>
          <Text>Song Name: {person.name} Duration: {person.age}</Text>
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
    backgroundColor: '#E2FF00'
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
    appData: state.appData
  }
}
function mapDispatchToProps(dispatch){
  return{
    fetchData: ()=> dispatch(fetchData())
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TestSaga)