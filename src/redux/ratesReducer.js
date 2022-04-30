import { SET_DEFAULT_RATE, SET_EXTRA_RATE, SET_HOLIDAY_RATE, SET_SICK_RATE } from './types';

const initialState = { defaultRate: 300, extraRate: 400, holidayRate: 400, sickRate: 60 };

if (!localStorage.getItem('rates')) {
  localStorage.setItem('rates', JSON.stringify(initialState));
}

const getRatesFromLocalStorage = () => JSON.parse(localStorage.getItem('rates'));

export const ratesReducer = (state = getRatesFromLocalStorage() || initialState, { type, payload }) => {
  switch (type) {
    case SET_DEFAULT_RATE:
      localStorage.removeItem('rates');
      localStorage.setItem('rates', JSON.stringify({ ...state, defaultRate: payload }));
      return { ...state, defaultRate: payload };
    case SET_EXTRA_RATE:
      localStorage.removeItem('rates');
      localStorage.setItem('rates', JSON.stringify({ ...state, extraRate: payload }));
      return { ...state, extraRate: payload };
    case SET_HOLIDAY_RATE:
      localStorage.removeItem('rates');
      localStorage.setItem('rates', JSON.stringify({ ...state, holidayRate: payload }));
      return { ...state, holidayRate: payload };
    case SET_SICK_RATE:
      localStorage.removeItem('rates');
      localStorage.setItem('rates', JSON.stringify({ ...state, sickRate: payload }));
      return { ...state, sickRate: payload };
    default:
      return state;
  }
};
