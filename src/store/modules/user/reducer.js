import * as types from '../types';

const initialState = {
  profile: null
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      const newState = { ...state };
      newState.profile = action.payload.user;
      return newState;
    }
    default:
      return state;
  }
}
