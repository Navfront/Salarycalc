import styled from 'styled-components/macro';

export const StyledWorkCalendar = styled.section`
  color: inherit;
  font-size: 18px;
  font-weight: 400;
`;
export const HiddenWorkCalendarTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
export const StyledWorkCalendarFigure = styled.figure`
  border-radius: 4px;
  margin: 0;
  padding: 5px 10px;
`;
export const StyledWorkCalendarCaption = styled.figcaption`
  font-size: 28px;
  font-weight: 700;
  color: inherit;
  margin-bottom: 10px;
`;

export const StyledWorkCalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1%;
`;

export const StyledDayName = styled.p`
  text-align: center;
  color: ${({ theme }) => (theme ? theme.colors.alfa : 'none')};
  border: 2px solid ${({ theme }) => (theme ? theme.colors.bgAccent : 'none')};
  border-radius: 2px;
  opacity: 0.5;
  @media (max-width: 767.9px) {
    font-size: 14px;
    padding: 0;
  }
  margin-bottom: 6px;
  user-select: none;
`;
