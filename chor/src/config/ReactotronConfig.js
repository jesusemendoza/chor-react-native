import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron
.configure() //controls connection & communication settings
.use(sagaPlugin())
.use(reactotronRedux())
.useReactNative()//adds all the built in react native plugins
.connect()

console.tron = Reactotron