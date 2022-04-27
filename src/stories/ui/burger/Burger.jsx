import { StyledBurger } from './styled';
import { useState } from 'react';

function Burger({ size }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <StyledBurger
      onClick={() => {
        setIsBurgerActive(!isBurgerActive);
      }}
      active={isBurgerActive}
      size={size}
    >
      <span /> <span /> <span />
    </StyledBurger>
  );
}

export default Burger;
