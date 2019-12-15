import * as types from '../types';

const initialState = {
  token: null,
  signed: false,
  loading: false
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      const newState = { ...state };
      newState.token = action.payload.token;
      newState.signed = true;
      return newState;
    }
    case types.SIGN_IN_REQUEST:
      return state;
    case types.SIGN_FAILURE:
      return state;
    default:
      return state;
  }
}
