import { StyledCalendarCell } from './styled';
import { useDispatch } from 'react-redux';
import { setCalendarValue } from '../../../redux/actions';

function CalendarCell({ isHday = 0, children }) {
  const setCaleMutant = useDispatch();

  const handlerCellOnClick = () => {
    setCaleMutant(setCalendarValue());
  };

  return (
    <StyledCalendarCell onClick={handlerCellOnClick} isHday={isHday}>
      {children}
    </StyledCalendarCell>
  );
}
export default CalendarCell;
