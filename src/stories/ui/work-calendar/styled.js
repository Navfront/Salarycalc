import styled from "styled-components/macro";

export const StyledWorkCalendar = styled.article``;

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
  border: 1px solid #bf6929;
  border-radius: 4px;
  padding: ${({ cellSize }) => {
    return cellSize ? cellSize + "px" : "0";
  }};
`;
export const StyledWorkCalendarCaption = styled.figcaption`
  font-size: 20px;
  font-weight: 700;
`;

export const StyledWorkCalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1%;
`;

export const SCell = styled.div`
  box-sizing: border-box;
  background-color: ${({ isHday }) => {
    return isHday ? "darkred" : "#795e46";
  }};
  color: white;
  font-size: 26px;
  border-radius: 3px;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  display: inline-flex;

  padding: ${({ cellSize }) => {
    return cellSize ? cellSize + "px" : "0";
  }};
  font-size: 40px;

  &:hover,
  &:focus {
    background-color: #bf9d7f;
  }
  &:active {
    opacity: 0.8;
  }
`;
