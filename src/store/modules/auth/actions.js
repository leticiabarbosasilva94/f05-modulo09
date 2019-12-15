import { EXAMPLE_TYPE_REQUEST, EXAMPLE_TYPE_SUCCESS } from '../types';

export function exampleActionRequest(someData) {
  return {
    type: EXAMPLE_TYPE_REQUEST,
    exampleData: someData
  };
}

export function exampleActionSuccess(someData) {
  return {
    type: EXAMPLE_TYPE_SUCCESS,
    exampleData: someData
  };
}
