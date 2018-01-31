import { combineReducers } from 'redux';

import errorsReducer from './session_errors_reducer';
import session from './session_reducer';

const rootReducer = combineReducers({
  errorsReducer,
  session
});

export default errorsReducer;
