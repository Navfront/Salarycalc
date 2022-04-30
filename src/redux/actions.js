import {
  SET_DEFAULT_RATE,
  TOGGLE_MENU,
  SET_EXTRA_RATE,
  SET_HOLIDAY_RATE,
  SET_SICK_RATE,
  SET_CALENDAR_VALUE,
} from './types';

export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const setDefaultRate = (value) => ({ type: SET_DEFAULT_RATE, payload: value });
export const setExtraRate = (value) => ({ type: SET_EXTRA_RATE, payload: value });
export const setHolidayRate = (value) => ({ type: SET_HOLIDAY_RATE, payload: value });
export const setSickRate = (value) => ({ type: SET_SICK_RATE, payload: value });
export const setCalendarValue = (obj) => ({
  type: SET_CALENDAR_VALUE,
  payload: obj,
});
export const clearCalendarValue = (month, day) => ({
  type: SET_CALENDAR_VALUE,
  payload: { month, day, workType: null, value: null },
});
