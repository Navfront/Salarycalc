import styled from 'styled-components/macro';

export const StyledMain = styled.main`
  padding-top: 90px;
  background-color: ${({ theme }) => (theme ? theme.colors.bg : 'none')};
`;
