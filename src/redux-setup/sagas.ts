import { all, fork } from '@redux-saga/core/effects';
import { saga as counterSaga } from 'redux-setup/counter';
import { saga as authSaga } from 'redux-setup/auth';

export default function* rootSaga() {
  yield all([fork(counterSaga), fork(authSaga)]);
}
