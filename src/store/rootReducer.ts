import { combineReducers } from '@reduxjs/toolkit';
import { reducer as alertReducer } from '../slices/alert';
import { reducer as contentReducer } from '../slices/content';

const rootReducer = combineReducers({
  alert: alertReducer,
  content: contentReducer,
});

export default rootReducer;
