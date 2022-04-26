import styled, { css } from 'styled-components/macro';

const activeMainMenu = css`
  transform: rotate(0) translateY(0);
`;

export const StyledMainMenuLayout = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;

  z-index: 1;
  max-width: 500px;
  margin-left: auto;
  form {
    font-family: inherit;
  }

  fieldset {
    font-size: 20px;
    padding: 11px;
  }
  fieldset > p {
    margin-top: 5px;
    display: flex;
    align-items: center;

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  fieldset span {
    display: inline-flex;
    justify-content: flex-end;
    margin-left: auto;
    font-weight: 700;
    flex: 1;
    padding: 0 10px 0 5px;
  }

  input[type='number'] {
    padding: 5px 5px;

    @media (max-width: 420px) {
      width: 100px;
    }
  }
`;

export const StyledMainMenuWrapper = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  padding: 13px;
  padding-top: 15px;
  transition: ease 0.3s;
  transform-origin: 100% 0;
  transform: translateY(-30%) rotate(-180deg);
  background-color: ${({ theme }) => (theme ? theme.colors.bgLAccent : 'none')};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  ${({ active }) => (active ? activeMainMenu : null)}
`;

export const StyledMainMenuTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  font-family: inherit;
`;

export const StyledMainMenuSuccessButton = styled.button`
  background-color: ${({ theme }) => (theme ? theme.colors.bgAccent : 'none')};
  border-radius: 2px;
  font-weight: 600;
  font-size: 20px;
  padding: 5px 10px;
`;
