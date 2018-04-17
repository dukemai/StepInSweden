import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import app from './app';
import criteria from './criteria';
import suggestion from './suggestion';

const rootReducer = combineReducers({
  app,
  criteria,
  suggestion,
});

export default rootReducer;