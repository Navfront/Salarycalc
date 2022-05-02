import React, { useEffect, useState } from 'react';
import {
  HiddenWorkCalendarTitle,
  StyledMonthSalary,
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarFigure,
  StyledWorkCalendarWrapper,
  StyledDayName,
} from './styled';

import CalendarCell from './../calendar-cell/CalendarCell';
import { useSelector } from 'react-redux';
import calcSalary from './../../../api/calcSalary';
import { DAY_NAMES } from './../../../mocks/mocks';

function WorkCalendar({ hiddenTitle, title, month }, ref) {
  const calendar = useSelector((state) => state.calendarReducer);
  const ratesObject = useSelector((state) => state.ratesReducer);
  const [monthSalary, setMonthSalary] = useState({ loading: false, data: 'Загрузка...' });
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    setMonthSalary({ ...monthSalary, loading: true });
    calcSalary(month, ratesObject)
      .then((res) => {
        setMonthSalary({ loading: false, data: res });
      })
      .catch((err) => {
        setMonthSalary({ loading: false, data: err });
      });
  }, [setMonthSalary, calendar, ratesObject]);

  return (
    <StyledWorkCalendar ref={ref}>
      <HiddenWorkCalendarTitle>{hiddenTitle}</HiddenWorkCalendarTitle>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {DAY_NAMES.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledDayName key={index}>{item}</StyledDayName>
          ))}
          {calendar &&
            calendar.length &&
            calendar[month && month < 12 ? month : 0].map((item, index) => (
              <CalendarCell
                dayObject={{
                  month,
                  dayIndex: item.dayIndex,
                  day: item.day,
                  hDay: item.hDay,
                  activity: item.activity || null,
                  extra: item.extra || null,
                  money: item.money || 0,
                }}
                isHday={item.hDay}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {item.day}
              </CalendarCell>
            ))}
        </StyledWorkCalendarWrapper>
        <StyledMonthSalary>{monthSalary.data}</StyledMonthSalary>
      </StyledWorkCalendarFigure>
    </StyledWorkCalendar>
  );
}

export default React.forwardRef(WorkCalendar);
