import { StyledBurger } from './styled';

export default function Burger({ bgColor, size, active, onClick }) {
  return (
    <StyledBurger onClick={onClick} active={active} bgColor={bgColor} size={size}>
      <span /> <span /> <span />
    </StyledBurger>
  );
}
