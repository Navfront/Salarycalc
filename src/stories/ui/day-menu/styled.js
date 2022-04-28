import styled from 'styled-components/macro';

export const StyledDayMenuWrapper = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-items: center;
  }

  .dayTitle {
    grid-row: 1/3;
    span {
      display: block;
      font-size: 30px;
    }
  }
  .dayButtonWrapper {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  }
`;
