import { combineReducers } from 'redux';
import Demo from './Demo';

const rootReducer = combineReducers({
  demo: Demo,
});

export default rootReducer;
