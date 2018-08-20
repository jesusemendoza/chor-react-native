import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import { login } from '../actions/user';
import {
   StyleSheet, 
   Text, 
   View,
   SafeAreaView,
   TextInput,
   TouchableOpacity   } 
   from 'react-native';

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            loading: 'true',
        }
    }
    loginHandler = () => {
        const { email, password } = this.state;
        this.props.login({ email, password });
    }
    authCheck = () => {
        if (this.props.appState.user.isAuthenticated === true) {
            return this.props.navigation.navigate('MainApp')  
        } else {
            this.setState({loading: false})
        }
    }
    componentWillMount = () => {
        this.authCheck();
    }

    componentDidUpdate = () => {
        if (this.props.appState.user.isAuthenticated === true) {
            return this.props.navigation.navigate('MainApp')  
        }
    }

     

  render() {
    console.tron.log(this.props, 'props, login render')
    return (
      (this.state.loading)  
      ?(<SafeAreaView><Text>Loading .....</Text></SafeAreaView>)  
      :(<SafeAreaView style={styles.LoginForm}>
        <View style={styles.LoginContentContainer}>
          <TextInput 
          style={styles.textInput} 
          autoCorrect={false} 
          autoCapitalize = "none"
          placeholder="email@yahoo.com"
          onChangeText={(email) => this.setState({ email })}
          />
    
          <TextInput style={styles.textInput}
          placeholder="Password"
          returnKeyType="go"
          autoCapitalize = "none"
          secureTextEntry
          autoCorrect={false}
          onChangeText={(password) => this.setState({ password })}

          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            onPress={() => this.loginHandler()}
            style={styles.button} >
            <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>)
    );
  }
}

const styles = StyleSheet.create({
  LoginForm: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    backgroundColor: '#FCFCFC',
    alignItems: 'center', 
  },
  LoginContentContainer: {
    height: '90%',
    padding: 20,
    alignSelf: 'stretch',
    backgroundColor: '#FCFCFC'
  },
  // header: {
  //   fontSize: 18,
  //   color: '#7bd1aa',
  //   paddingBottom:10

  // },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    color: '#363732',
    fontSize: 18
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

function mapStateToProps (state) {
    return {
      appState: state
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      fetchData: () => dispatch(fetchData()),
      login: (loginObject) => dispatch(login(loginObject)),
    }
  }
  export default connect (
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)