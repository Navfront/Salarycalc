import logo from '../../../assets/logo.png';
import bigLogo from '../../../assets/mylogolow.jpg';
import { StyledLogo } from './styled';

export default function Logo({ size, text }) {
  return (
    <StyledLogo href="/">
      <img
        width={size > 1 ? '200' : '40'}
        height={size > 1 ? '100' : '40'}
        src={size > 1 ? bigLogo : logo}
        alt="Navfront.ru logo"
      />
      {size > 1 ? null : <span>{text}</span>}
    </StyledLogo>
  );
}
