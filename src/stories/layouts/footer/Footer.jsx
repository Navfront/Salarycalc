import { StyledFooter } from './styled';

function Footer({ children, paddings, bgColor }) {
  return (
    <StyledFooter paddings={paddings} bgColor={bgColor}>
      {children}
    </StyledFooter>
  );
}

export default Footer;
