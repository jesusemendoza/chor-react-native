import { all, fork } from 'redux-saga/effects';

import data from './data';
import user from './user';

export default function* root() {
  yield all([
    fork(data),
    fork(user),
  ]);
}