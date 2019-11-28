import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { postSaga } from "./post";

export default function* rootSaga() {
  yield all([
    ...authSaga,
    ...postSaga
  ]);
}
