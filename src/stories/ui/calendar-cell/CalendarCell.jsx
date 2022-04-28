import { StyledCalendarCell } from './styled';

function CalendarCell({ isHday = 0, children, onClick }) {
  return (
    <StyledCalendarCell onClick={onClick} isHday={isHday}>
      {children}
    </StyledCalendarCell>
  );
}
export default CalendarCell;
