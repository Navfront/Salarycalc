import { StyledContainer } from './styled';

function Container({ children, pageWidth, sidePaddings }) {
  return (
    <StyledContainer pageWidth={pageWidth} sidePaddings={sidePaddings}>
      {children}
    </StyledContainer>
  );
}

export default Container;
