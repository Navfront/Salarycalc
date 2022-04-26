import Logo from '../../ui/logo/Logo';
import { StyledNav } from './styled';
import Burger from '../../ui/burger/Burger';
import { useState } from 'react';

export default function Nav({ children }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleOnClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <StyledNav>
      <Logo text={'SalaryCalc'} />
      <ul>{children}</ul>
      <Burger size="0.8" onClick={handleOnClick} active={isBurgerActive} />
    </StyledNav>
  );
}
