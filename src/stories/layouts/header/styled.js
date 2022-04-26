import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  padding: ${({ paddings }) => paddings ? paddings : 0};
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'none'};
`;
