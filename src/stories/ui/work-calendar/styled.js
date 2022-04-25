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
export const StyledWorkCalendarTable = styled.table`
  border: 1px solid #bf6929;
  border-radius: 4px;
  padding: ${({ cellSize }) => {
    return cellSize ? cellSize + "px" : "0";
  }};
  td {
    padding: ${({ cellSize }) => {
      return cellSize ? cellSize + "px" : "0";
    }};
  }
`;
export const StyledWorkCalendarCaption = styled.caption`
  font-size: 20px;
  font-weight: 700;
`;

export const STr = styled.tr``;

export const STd = styled.td`
  box-sizing: border-box;
  background-color: #795e46;
  border-radius: 3px;
  text-align: center;
  vertical-align: middle;
  user-select: none;

  &:hover,
  &:focus {
    background-color: #bf9d7f;
  }
  &:active {
    opacity: 0.8;
  }
`;
