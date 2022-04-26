import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
  padding: ${({ paddings }) => (paddings ? paddings : 0)};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'none')};
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
