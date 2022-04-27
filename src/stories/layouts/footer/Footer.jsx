import { StyledFooter, StyledFooterWrapper } from './styled';
import Container from './../container/Container';
import { memo } from 'react';

function Footer({ children }) {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWrapper>{children}</StyledFooterWrapper>
      </Container>
    </StyledFooter>
  );
}

export default memo(Footer);
