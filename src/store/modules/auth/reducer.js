import { EXAMPLE_TYPE_REQUEST, EXAMPLE_TYPE_SUCCESS } from '../types';

const initialState = {};

// action is not being used
// eslint-disable-next-line no-unused-vars
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_TYPE_REQUEST: {
      // Do what you need
      return state;
    }

    case EXAMPLE_TYPE_SUCCESS: {
      // Do what you need
      return state;
    }

    default: {
      return state;
    }
  }
}
