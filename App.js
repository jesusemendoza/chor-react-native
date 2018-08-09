import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Root } from './src/config/router'
import configureStore from './src/config/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const configuredStore = configureStore()

const { store, persistor } = configuredStore;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#396380'
  },
});
