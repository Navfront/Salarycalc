import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { ratesReducer } from './ratesReducer';
import { calendarReducer } from './calendarReducer';

const rootReducer = combineReducers({ appReducer, ratesReducer, calendarReducer });

export default rootReducer;
