import styled from "styled-components/macro";

export const StyledContainer = styled.div`
  max-width: ${({ pageWidth }) => {
    return pageWidth ? pageWidth + "px" : 1100 + "px";
  }};

  margin: 0 auto;
  padding: 0
    ${({ sidePaddings }) => {
      return sidePaddings ? sidePaddings + "px" : 30 + "px";
    }};
`;
