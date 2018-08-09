import { applyMiddleware, createStore } from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import Sagas from '../sagas';

const sagaMonitor = Reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor})

export default function configureStore() {
  const store = Reactotron.createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(Sagas)
  return store
}
