import styled from 'styled-components/macro';

export const StyledWorkCalendar = styled.article`
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

export const SCell = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: ${({ isHday, theme }) => isHday ? theme.colors.bgAccent : theme.colors.bgLAccent};
  color: ${({ isHday, theme }) => (isHday ? theme.colors.warn : theme.colors.text)};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  display: inline-flex;
  padding: 3px;
  font-size: 18px;
  font-weight: 500;
  min-height: 50px;

  &:hover,
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.hoverBorder};
    outline-offset: -2px;
  }
  &:active {
    opacity: 0.8;
    outline: 2px solid ${({ theme }) => theme.colors.bgAccent};
    outline-offset: -2px;
  }
`;
