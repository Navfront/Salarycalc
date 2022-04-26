import { StyledFooter, StyledFooterWrapper } from './styled';
import Container from './../container/Container';

function Footer({ paddings, bgColor, children }) {
  console.log('render');
  return (
    <StyledFooter paddings={paddings} bgColor={bgColor}>
      <Container>
        <StyledFooterWrapper>{children}</StyledFooterWrapper>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
