import { twentytwo } from '../mocks/mocks';
import { SET_CALENDAR_VALUE } from './types';

export const calendarReducer = (state = twentytwo, { type, payload }) => {
  // eslint-disable-next-line no-console
  console.log(type);
  // eslint-disable-next-line no-console
  console.log(payload);

  switch (type) {
    case SET_CALENDAR_VALUE:
      return state.map((month, monthIndex) => {
        if (monthIndex === payload.month) {
          const result = month.map((day) => {
            if (day.day === payload.day) {
              return { ...payload };
            }
            return day;
          });
          // eslint-disable-next-line no-console
          console.log('result', result);
          return result;
        }

        return month;
      });

    default:
      return state;
  }
};
