import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import authors from './authorReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  authors,
  courses
});

export default rootReducer;
