import { combineReducers } from 'redux';
import valueReducer from './valueReducer';

const rootReducer = combineReducers({
  value: valueReducer
});

export default rootReducer;