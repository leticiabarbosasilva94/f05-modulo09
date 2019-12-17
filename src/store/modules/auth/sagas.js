import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get as _get } from 'lodash';
import * as types from '../types';
import axios from '../../../services/axios';
import * as actions from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
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

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(actions.signInSuccess(token, user));
    history.push('/dashboard');
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.signFailure());
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password, confirmPassword } = payload;

    yield call(axios.post, 'users', {
      name,
      email,
      password,
      confirmPassword,
      provider: true
    });

    toast.success('Usuário criado com sucesso.');
    history.push('/');
  } catch (e) {
    const errorMessage = _get(
      e,
      'response.data.errors[0]',
      'Erro desconhecido'
    );

    toast.error(errorMessage);
    yield put(actions.signFailure());
  }
}

function setToken({ payload }) {
  const token = _get(payload, 'auth.token', null);

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.PERSIST_REHYDRATE, setToken),
  takeLatest(types.SIGN_IN_REQUEST, signIn),
  takeLatest(types.SIGN_UP_REQUEST, signUp)
]);
