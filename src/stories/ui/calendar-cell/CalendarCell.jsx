import { StyledCalendarCell } from './styled';
import { useDispatch } from 'react-redux';
import { setCalendarValue } from '../../../redux/actions';
import workingDayIcon from '../../../assets/work.svg';
import sickDayIcon from '../../../assets/sick.svg';
import palmDayIcon from '../../../assets/palm.svg';
import React from 'react';

function CalendarCell({ dayObject, children }) {
  const openDayMenu = useDispatch();
  const handlerCellOnClick = () => {
    openDayMenu(setCalendarValue(dayObject));
  };

  return (
    <StyledCalendarCell onClick={dayObject.day && handlerCellOnClick} isHday={dayObject.hDay}>
      {children}
      {dayObject.activity === 1 ? <img width="20px" height="20px" src={workingDayIcon} alt="working day" /> : null}
      {dayObject.activity === 2 ? <img width="20px" height="20px" src={sickDayIcon} alt="sick day" /> : null}
      {dayObject.activity === 3 ? <img width="20px" height="20px" src={palmDayIcon} alt="vocation day" /> : null}

      {dayObject.extra && dayObject.activity === 1 ? <span className="extraHours">+{dayObject.extra}</span> : null}
    </StyledCalendarCell>
  );
}
export default CalendarCell;
