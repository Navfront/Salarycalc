import { useState } from 'react';
import React from 'react';
import {
  HiddenWorkCalendarTitle,
  SCell,
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarFigure,
  StyledWorkCalendarWrapper,
} from './styled';
import { twentytwo } from '../../../mocks/mocks';

function WorkCalendar({ hiddenTitle, title, month }) {
  // eslint-disable-next-line no-unused-vars
  const [calendar, setCalendar] = useState(twentytwo);
  return (
    <StyledWorkCalendar>
      <HiddenWorkCalendarTitle>{hiddenTitle}</HiddenWorkCalendarTitle>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {calendar &&
            calendar.length &&
            calendar[month && month < 12 ? month : 0].map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SCell isHday={item.hDay} key={index}>
                {item.day}
              </SCell>
            ))}
        </StyledWorkCalendarWrapper>
      </StyledWorkCalendarFigure>
    </StyledWorkCalendar>
  );
}

export default WorkCalendar;
