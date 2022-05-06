import styled from 'styled-components/macro';

export const StyledAboutWrapper = styled.div`
  margin-bottom: ${({ isShow }) => (isShow ? '30px' : '0px')};
  height: ${({ isShow }) => (isShow ? 'auto' : '1px')};
  transition: ease 0.3s height;
  text-align: center;
  overflow: hidden;
  p {
    line-height: 1.45;
  }
`;

export const StyledAboutButton = styled.button`
  display: flex;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 2.5px solid ${({ theme }) => theme.colors.bgLAccent};
  color: ${({ theme }) => theme.colors.sux};
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 13px;
  font-weight: 600;
`;
