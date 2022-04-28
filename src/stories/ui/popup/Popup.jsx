import { StyledPopup } from './styled';

function CalendarCell({ isShow = false, children }) {
  return <StyledPopup isShow={isShow}>{children}</StyledPopup>;
}
export default CalendarCell;
