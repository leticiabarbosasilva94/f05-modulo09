import { all } from 'redux-saga/effects';

import exampleSaga from './exampleModule/sagas';

export default function* rootSaga() {
  return yield all([exampleSaga]);
}
