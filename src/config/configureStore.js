import { applyMiddleware, createStore } from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../reducers';
import Sagas from '../sagas';

const sagaMonitor = Reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor})

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const store = Reactotron.createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(Sagas)
  let persistor = persistStore(store)
  return { store, persistor }
}
