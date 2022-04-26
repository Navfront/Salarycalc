import { StyledMain } from './styled';

function Main({ children, paddings, bgColor }) {
  return (
    <StyledMain paddings={paddings} bgColor={bgColor}>
      {children}
    </StyledMain>
  );
}

export default Main;
