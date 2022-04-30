import { StyledMain } from './styled';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';
import { MONTHS } from './../../../mocks/mocks';
import { useSelector } from 'react-redux';
import Container from './../../../stories/layouts/container/Container';

function Main() {
  const calendar = useSelector((state) => state.calendarReducer);

  return (
    <StyledMain>
      <Container>
        {calendar.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <WorkCalendar title={MONTHS[index]} key={index} month={index} />
        ))}
      </Container>
    </StyledMain>
  );
}

export default Main;
