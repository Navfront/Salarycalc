import { StyledMain } from './styled';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';
import { MONTHS } from './../../../mocks/mocks';
import { useSelector } from 'react-redux';
import Container from './../../../stories/layouts/container/Container';
import MonthFilter from './../../ui/month-filter/MonthFilter';
import React, { useEffect, useRef } from 'react';
import moment from 'moment';

function Main() {
  const calendar = useSelector((state) => state.calendarReducer);
  const filter = useSelector((state) => state.appReducer.monthFilter);
  const currentMonth = moment().month();
  const currentMonthRef = useRef();

  const canIRender = (index) => {
    switch (filter.showType) {
      case 0:
        return true;
      case 1:
        return index === filter.showMonth || index === filter.showMonth - 1;
      case 2:
        return index === filter.showMonth;

      default:
        return false;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    currentMonthRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, []);

  return (
    <StyledMain>
      <Container>
        <MonthFilter />
        {calendar.map((item, index) =>
          canIRender(index) ? (
            <WorkCalendar
              ref={currentMonth === index ? currentMonthRef : null}
              title={MONTHS[index]}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              month={index}
            />
          ) : null
        )}
      </Container>
    </StyledMain>
  );
}

export default Main;
