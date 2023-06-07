import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, delay, put, takeLatest } from '@redux-saga/core/effects';
import { increment, incrementSaga, incrementSuccces } from 'redux-setup/counter';
import { COUNTER } from 'shared/definitions/saga-type';

export function* log(action: PayloadAction) {
  //   console.log('action', action);
}

export function* logSaga(action: PayloadAction<number>) {
  console.log('waiting 1s');

  yield delay(1000);
  console.log('done', action);

  yield put(incrementSuccces(action.payload));
}

function* counterSaga() {
  console.log('counter saga');

  // yield takeEvery(increment, log);
  // yield takeEvery('*', log);

  // yield takeEvery(incrementSaga, logSaga);
  yield takeLatest(incrementSaga, logSaga);
}

export default function* rootSaga() {
  yield takeEvery(COUNTER.FETCH_COUNTER, counterSaga);
}
