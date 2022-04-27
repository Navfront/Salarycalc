import Logo from '../../ui/logo/Logo';
import { StyledNav } from './styled';
import Burger from '../../ui/burger/Burger';
import MainMenu from './../../ui/main-menu/MainMenu';

export default function Nav({ children }) {
  return (
    <StyledNav>
      <Logo text={'SalaryCalc'} />
      <ul>{children}</ul>
      <Burger size="0.8" />
      <MainMenu />
    </StyledNav>
  );
}
