import Logo from '../../ui/logo/Logo';
import { StyledNav } from './styled';
import Burger from '../../ui/burger/Burger';
import MainMenu from './../../ui/main-menu/MainMenu';

export default function Nav() {
  return (
    <StyledNav>
      <Logo text={'SalaryCalc'} />
      <h1 className='visually-hidden'>Приложение для составления рабочего графика и подсчета зарплаты за месяц</h1>
      <Burger size="0.8" />
      <MainMenu />
    </StyledNav>
  );
}
