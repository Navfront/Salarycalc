import styled from 'styled-components/macro';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 20px 0;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    padding: 0;
  }
`;
