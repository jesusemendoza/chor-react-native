import React from 'react';
import { Image } from 'react-native'
import { StackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

//landing Stack
import Home from '../screens/Home';
import LoginForm from '../screens/LoginForm';
import SignUpForm from '../screens/SignUpForm';

//Main App
import { tabAssets } from '../assets'
import Discover from '../screens/MainApp/Discover';
import Search from '../screens/MainApp/Search';
import Feed from '../screens/MainApp/Feed';
import MyMusic from '../screens/MainApp/MyMusic';
import Playlist from '../screens/MainApp/Playlist';
import TestSaga from  '../screens/TestSaga';

export const LandingStack = StackNavigator({
     Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',
          header: null,
        },
      },
      Login: {
        screen: LoginForm,
        navigationOptions:{
          title: 'Login',
        },
      },
      SignUp: {
        screen: SignUpForm,
        navigationOptions:{
          title: 'SignUp',
        }
      },
},{
  mode: 'modal',
})

// export const FeedStack = StackNavigator({
//   Feed: {
//     screen: Feed,
//     navigationOptions: {
//       title: 'Feed',
//     },
//   },
//   Details: {
//     screen: UserDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
//     }),
//   },
// });

export const MainAppTabs = createBottomTabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: 'Chors',
      tabBarIcon:({ focused })=> {
        return (
        <Image
        style={{ width: 29, height: 40 }}
        source={(focused) ? require('../assets/images/chor-pressed.png') : require('../assets/images/chor-not-pressed.png')} />
      )},
    
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon:({ focused })=> {
        return (
        <Image
        style={{ width: 55, height: 55 }}
        source={(focused) ? require('../assets/images/search-pressed.png') : require('../assets/images/search.png')} />
      )},
      
    },
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon:({ focused })=> {
        return (
        <Image
        style={{ width: 45, height: 45 }}
        source={(focused) ? require('../assets/images/messages-pressed.png') : require('../assets/images/messages.png')} />
      )},
    
    },
  },
  MyMusic: {
    screen: MyMusic,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon:({ focused })=> {
        return (
        <Image
        style={{ width: 18, height: 26 }}
        source={(focused) ? require('../assets/images/chor-logo.png') : require('../assets/images/chor-logo.png')} />
      )},
     
    },
  },
  Playlist: {
    screen: TestSaga,
    navigationOptions: {
      tabBarLabel: 'My Trophies',
      tabBarIcon:({ focused })=> {
        return (
        <Image
        style={{ width: 35, height: 45 }}
        source={(focused) ? require('../assets/images/trophies-pressed.png') : require('../assets/images/trophies.png')} />
      )},
    
    },
  },
},{
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
});

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });

// export const Root = StackNavigator({
//   Landing: {
//     screen: LandingStack,
//     },
//   MainApp: {
//     screen: MainAppTabs,
//     },  
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });

export const Root = createSwitchNavigator({
    Landing: LandingStack,
    MainApp: MainAppTabs, 
  }, {
    // initialRouteName: 'Landing', 
    //set to main app for testing
    initialRouteName: 'MainApp',
    mode: 'modal',
    headerMode: 'none',
  });