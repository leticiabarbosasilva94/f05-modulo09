import * as types from '../types';

const initialState = {
  token: null,
  signed: false,
  loading: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST: {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    }

    case types.SIGN_IN_SUCCESS: {
      const newState = { ...state };
      newState.token = action.payload.token;
      newState.signed = true;
      newState.loading = false;
      return newState;
    }
    case types.SIGN_FAILURE: {
      const newState = { ...initialState };
      newState.loading = false;
      return newState;
    }
    default:
      return state;
  }
}
