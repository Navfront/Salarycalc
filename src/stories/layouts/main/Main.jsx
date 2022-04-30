import { StyledMain } from './styled';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';
import { MONTHS } from './../../../mocks/mocks';
import { useSelector } from 'react-redux';
import Container from './../../../stories/layouts/container/Container';
import MonthFilter from './../../ui/month-filter/MonthFilter';

function Main() {
  const calendar = useSelector((state) => state.calendarReducer);
  const filter = useSelector((state) => state.appReducer.monthFilter);

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

  return (
    <StyledMain>
      <Container>
        <MonthFilter />
        {calendar.map((item, index) =>
          // eslint-disable-next-line react/no-array-index-key
          canIRender(index) ? <WorkCalendar title={MONTHS[index]} key={index} month={index} /> : null
        )}
      </Container>
    </StyledMain>
  );
}

export default Main;
