import { StyledMain } from "./styled";

const Main = ({ children, paddings, bgColor }) => (
  <StyledMain paddings={paddings} bgColor={bgColor}>
    {children}
  </StyledMain>
);

export default Main;
