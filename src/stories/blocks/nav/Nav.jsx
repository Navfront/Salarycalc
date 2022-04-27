import Logo from '../../ui/logo/Logo';
import { StyledNav } from './styled';
import Burger from '../../ui/burger/Burger';

export default function Nav({ children }) {
  return (
    <StyledNav>
      <Logo text={'SalaryCalc'} />
      <ul>{children}</ul>
      <Burger size="0.8" />
    </StyledNav>
  );
}
