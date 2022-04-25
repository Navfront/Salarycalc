import getWorkDaysDataArray, { getDataArrayWithHDays, twtwo } from "../../../api/work-days-api";

import { useState } from "react";
import {
  HiddenWorkCalendarTitle,
  SCell,
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarFigure,
  StyledWorkCalendarWrapper,
} from "./styled";

const WorkCalendar = ({ hiddenTitle, title, cellSize, month }) => {
  const [calendar, setCalendar] = useState(getDataArrayWithHDays(getWorkDaysDataArray(2022), twtwo));

  return (
    <StyledWorkCalendar>
      <HiddenWorkCalendarTitle>{hiddenTitle}</HiddenWorkCalendarTitle>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {calendar &&
            calendar.length &&
            calendar[month ? month : 0].map((item, index) => (
              <SCell isHday={item.hDay} cellSize={cellSize} key={index}>
                {item.day}
              </SCell>
            ))}
        </StyledWorkCalendarWrapper>
      </StyledWorkCalendarFigure>
    </StyledWorkCalendar>
  );
};

export default WorkCalendar;
