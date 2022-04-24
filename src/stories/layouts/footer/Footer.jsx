import { StyledFooter } from "./styled";

const Footer = ({ children, paddings, bgColor }) => (
  <StyledFooter paddings={paddings} bgColor={bgColor}>
    {children}
  </StyledFooter>
);

export default Footer;
