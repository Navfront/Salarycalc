import { css } from 'styled-components';
import styled from 'styled-components/macro';

const visuallyHidden = css`
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

export const StyledAboutWrapper = styled.div`
  margin-bottom: ${({ isShow }) => (isShow ? '20px' : '10px')};
  ${({ isShow }) => (isShow ? null : visuallyHidden)}
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
  border: 2.5px solid ${({ theme }) => theme.colors.sux};
  color: ${({ theme }) => theme.colors.sux};
  padding: 5px 10px;
  border-radius: 13px;
  font-weight: 600;
`;
