import {fork, all} from 'redux-saga/effects';
import {watchApiRequest} from './apiYoutube';

export default function* rootSaga() {
  yield all ([
    fork(watchApiRequest)
  ])
}