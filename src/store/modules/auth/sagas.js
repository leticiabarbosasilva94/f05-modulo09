import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';
import axios from '../../../services/axios';
import * as actions from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(axios.post, 'sessions', {
    email,
    password
  });

  const { token, user } = response.data;

  if (!user.provider) {
    toast.error('Usuário não é provedor.');
    return;
  }

  yield put(actions.signInSuccess(token, user));
  history.push('/dashboard');
}

export default all([takeLatest(types.SIGN_IN_REQUEST, signIn)]);