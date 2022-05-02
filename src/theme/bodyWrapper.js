import styled from 'styled-components/macro';

export const BodyWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  overflow: ${({ scrollOff }) => (scrollOff ? 'hidden' : 'auto')};
  height: 100%;
  display: flex;
  flex-direction: column;
`;
