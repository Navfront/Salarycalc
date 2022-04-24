import { StyledContainer } from "./styled";

const Container = ({ children, pageWidth, sidePaddings }) => {
  return (
    <StyledContainer pageWidth={pageWidth} sidePaddings={sidePaddings}>
      {children}
    </StyledContainer>
  );
};

export default Container;
