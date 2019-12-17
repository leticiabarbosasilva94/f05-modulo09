import * as types from '../types';

export function signInRequest(email, password) {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { email, password }
  };
}

export function signInSuccess(token, user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token, user }
  };
}

export function signUpRequest(name, email, password, confirmPassword) {
  return {
    type: types.SIGN_UP_REQUEST,
    payload: { name, email, password, confirmPassword }
  };
}

export function signFailure() {
  return {
    type: types.SIGN_FAILURE
  };
}
