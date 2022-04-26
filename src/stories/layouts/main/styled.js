import styled from 'styled-components/macro';

export const StyledMain = styled.main`
  padding: ${({ paddings }) => (paddings ? paddings : 0)};
  padding-top: 100px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'none')};
`;
