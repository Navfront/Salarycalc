import getWorkDaysDataArray, { getDataArrayWithHDays, twtwo } from '../../../api/work-days-api';
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

function WorkCalendar({ hiddenTitle, title, month }) {
  // eslint-disable-next-line no-unused-vars
  const [calendar, setCalendar] = useState(getDataArrayWithHDays(getWorkDaysDataArray(2022), twtwo));

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
