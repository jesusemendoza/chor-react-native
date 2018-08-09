import { ActionTypes } from '../utils/constants';

export function login(){
  return {
    type: ActionTypes.USER_LOGIN_REQUEST,
    payload: {},
  };
}


export function logOut(){
  return {
    type: ActionTypes.USER_LOGOUT_REQUEST,
    payload: {},
  };
}