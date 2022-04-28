import React from 'react';
import {
  HiddenWorkCalendarTitle,
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarFigure,
  StyledWorkCalendarWrapper,
} from './styled';

import CalendarCell from './../calendar-cell/CalendarCell';
import { useSelector } from 'react-redux';

function WorkCalendar({ hiddenTitle, title, month }) {
  const calendar = useSelector((state) => state.calendarReducer);

  // eslint-disable-next-line no-unused-vars

  return (
    <StyledWorkCalendar>
      <HiddenWorkCalendarTitle>{hiddenTitle}</HiddenWorkCalendarTitle>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {calendar &&
            calendar.length &&
            calendar[month && month < 12 ? month : 0].map((item, index) => (
              <CalendarCell
                isHday={item.hDay}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {item.day}
              </CalendarCell>
            ))}
        </StyledWorkCalendarWrapper>
      </StyledWorkCalendarFigure>
    </StyledWorkCalendar>
  );
}

export default WorkCalendar;
