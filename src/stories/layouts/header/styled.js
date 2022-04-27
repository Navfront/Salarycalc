import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => (theme ? theme.colors.bgLAccent : 'none')};
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
`;
