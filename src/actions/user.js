import { ActionTypes } from '../utils/constants';

export function login(loginObject){
    console.tron.log(loginObject, 'loginObject, loginHandler')
  return {
    type: ActionTypes.USER_LOGIN_REQUEST,
    payload: loginObject,
  };
}


export function logOut(){
  return {
    type: ActionTypes.USER_LOGOUT_REQUEST,
    payload: {},
  };
}