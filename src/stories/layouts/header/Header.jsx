import { StyledHeader } from './styled';

function Header({ children, paddings, bgColor }) {
  return (
    <StyledHeader paddings={paddings} bgColor={bgColor}>
      {children}
    </StyledHeader>
  );
}

export default Header;
