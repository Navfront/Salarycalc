import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
  padding: 25px;
  background-color: ${({ theme }) => (theme ? theme.colors.bg : 'none')};
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
