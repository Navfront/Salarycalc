import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { ratesReducer } from './ratesReducer';

const rootReducer = combineReducers({ appReducer, ratesReducer });

export default rootReducer;
