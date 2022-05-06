import { StyledBurger } from './styled';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from './../../../redux/actions';

function Burger({ size }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const dispatch = useDispatch();
  const toggleMainMenu = useCallback(() => dispatch(toggleMenu()), []);

  return (
    <StyledBurger aria-label='Меню настроек'
      onClick={() => {
        setIsBurgerActive(!isBurgerActive);
        toggleMainMenu();
      }}
      active={isBurgerActive}
      size={size}
    >
      <span /> <span /> <span />
    </StyledBurger>
  );
}

export default Burger;
