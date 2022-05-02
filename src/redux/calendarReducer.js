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

  const mapCalendar = () => {
    const newCalendar = state.map((month, monthIndex) => {
      if (monthIndex === payload.month) {
        const result = month.map((day) => {
          if (day.day === payload.day) {
            return { ...payload };
          }
          return day;
        });
        return result;
      }

      return month;
    });
    localStorage.removeItem('calendar');
    localStorage.setItem('calendar', JSON.stringify(newCalendar));
    return newCalendar;
  };

  switch (type) {
    case SET_CALENDAR_VALUE:
      return mapCalendar();

    default:
      return state;
  }
};
