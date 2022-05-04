import { StyledCalendarCell } from './styled';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../../redux/actions';
import workingDayIcon from '../../../assets/work.svg';
import sickDayIcon from '../../../assets/sick.svg';
import palmDayIcon from '../../../assets/palm.svg';
import sandClock from '../../../assets/sandclock.svg';
import React, { useState } from 'react';

function CalendarCell({ dayObject, children }) {
  const [activityType, setActivityType] = useState(dayObject.activity);
  const openDayMenu = useDispatch();
  const handlerCellOnClick = () => {
    openDayMenu(togglePopup(dayObject, setActivityType));

  };

  return (
    <StyledCalendarCell onClick={dayObject.day && handlerCellOnClick} isHday={dayObject.hDay} isDay={dayObject.day}>
      {children}
      {activityType === 1 ? <img width="20" height="20" src={workingDayIcon} alt="working day" /> : null}
      {activityType === 2 ? <img width="20" height="20" src={sickDayIcon} alt="sick day" /> : null}
      {activityType === 3 ? <img width="20" height="20" src={palmDayIcon} alt="vocation day" /> : null}
      {activityType === 4 ? <img width="20" height="20" src={sandClock} alt="waiting day" /> : null}

      {dayObject.extra && dayObject.activity === 1 ? <span className="extraHours">+{dayObject.extra}</span> : null}
    </StyledCalendarCell>
  );
}
export default CalendarCell;
