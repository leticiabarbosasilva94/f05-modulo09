import { combineReducers } from 'redux';

import exampleReducer from './exampleModule/reducer';

export default combineReducers({
  example: exampleReducer
});
