import { combineReducers } from 'redux';
import appData from './dataReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  appData,
  ...userReducer,
})
export default rootReducer