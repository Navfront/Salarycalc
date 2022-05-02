import styled from 'styled-components/macro';

export const StyledPopup = styled.div`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  background-color: ${({ theme }) => (theme ? theme.colors.bgLAccent : 'none')};
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 99;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  border: 1px solid black;
  width: 600px;
  min-height: 200px;
  @media (max-width: ${({ theme }) => theme.mobileMax}) {
    width: 90%;
  }

  .сloseButton {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const StyledOverlay = styled.div`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(50, 50, 50, 0.7);
`;
