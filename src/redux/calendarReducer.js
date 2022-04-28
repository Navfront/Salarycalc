import { twentytwo } from '../mocks/mocks';
import { SET_CALENDAR_VALUE } from './types';

export const calendarReducer = (state = twentytwo, { type }) => {
  // eslint-disable-next-line no-console
  console.log(type);

  switch (type) {
    case SET_CALENDAR_VALUE:
      return state.map((month) => month.map((item) => ({ ...item, day: 1, mutant: true })));
    default:
      return state;
  }
};
