import { SET_DEFAULT_RATE, SET_EXTRA_RATE, SET_HOLIDAY_RATE, SET_SICK_RATE } from './types';

const initialState = { defaultRate: 300, extraRate: 400, holidayRate: 400, sickRate: 60 };

export const ratesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DEFAULT_RATE:
      return { ...state, defaultRate: payload };
    case SET_EXTRA_RATE:
      return { ...state, extraRate: payload };
    case SET_HOLIDAY_RATE:
      return { ...state, holidayRate: payload };
    case SET_SICK_RATE:
      return { ...state, sickRate: payload };
    default:
      return state;
  }
};
