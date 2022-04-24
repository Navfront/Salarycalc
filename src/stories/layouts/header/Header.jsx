import { StyledHeader } from "./styled";

const Header = ({ children, paddings, bgColor }) => (
  <StyledHeader paddings={paddings} bgColor={bgColor}>
    {children}
  </StyledHeader>
);

export default Header;
