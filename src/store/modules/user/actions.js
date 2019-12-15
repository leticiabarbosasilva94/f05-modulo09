import * as types from '../types';

export function signInRequest(email, password) {
  console.log('REQUESTING', email, password);
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { email, password }
  };
}

export function signInSuccess(token, user) {
  console.log('SUCCESS', token, user);
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token, user }
  };
}

export function signFailure() {
  console.log('Failure');
  return {
    type: types.SIGN_FAILURE
  };
}
