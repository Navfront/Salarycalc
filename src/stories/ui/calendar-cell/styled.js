import styled from 'styled-components/macro';

export const StyledCalendarCell = styled.button`
  position: relative;
  box-sizing: border-box;
  background-color: ${({ isHday, theme }) => (isHday ? theme.colors.bgAccent : theme.colors.bgLAccent)};
  color: ${({ isHday, theme }) => (isHday ? theme.colors.warn : theme.colors.text)};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  display: inline-flex;
  padding: 3px;
  font-size: 18px;
  font-weight: 500;
  min-height: 50px;
  border: none;
  cursor: pointer;
  min-height: 50px;
  min-width: 36.6px;
  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    font-size: 16px;
  }

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
