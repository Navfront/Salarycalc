import { twentytwo } from '../mocks/mocks';
import { SET_CALENDAR_VALUE } from './types';

if (!localStorage.getItem('calendar')) {
  localStorage.setItem('calendar', JSON.stringify(twentytwo));
}

const getCalendarFromLocalStorage = () => JSON.parse(localStorage.getItem('calendar'));

export const calendarReducer = (state = getCalendarFromLocalStorage() || twentytwo, { type, payload }) => {
  // eslint-disable-next-line no-console
  console.log('type ', type);
  // eslint-disable-next-line no-console
  console.log('payload ', payload);

  switch (type) {
    case SET_CALENDAR_VALUE:
      state.forEach((month, monthIndex) => {
        if (monthIndex === payload.month) {
          month.forEach((day) => {
            if (day.day === payload.day) {
              day.month = payload.month;
              day.activity = payload.activity;
              day.extra = payload.extra;
            }
          });
        }
      });
      localStorage.removeItem('calendar');
      localStorage.setItem('calendar', JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
