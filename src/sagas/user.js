import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from '../utils/constants';


export function* login(action) {
  try {
    const { email, password } = action.payload; 
    const requestObject = {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email': email,
          'password': password,
        })}
    // console.tron.log(email,' : ', password,' : email, password login-saga')    
    let response = yield call(fetch, 'http://localhost:4000/api/v1/auth/login', requestObject)
    let json = yield response.json();

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: {token: json.token, user: json.user},
    });
  }
  catch (err) {
    console.tron.log(err,':error, login saga error')
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  }
}

export function* logout() {
  try {
    yield call(delay, 200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  }
  catch (err) {
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN_REQUEST, login),
    takeLatest(ActionTypes.USER_LOGOUT_REQUEST, logout),
  ]);
}