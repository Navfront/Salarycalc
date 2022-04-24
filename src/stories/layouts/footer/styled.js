import styled from "styled-components/macro";

export const StyledFooter = styled.footer`
  padding: ${({ paddings }) => {
    return paddings ? paddings : 0;
  }};
  background-color: ${({ bgColor }) => {
    return bgColor ? bgColor : "none";
  }};
`;
