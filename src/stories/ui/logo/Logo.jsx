import logo from '../../../assets/logo.png';
import bigLogo from '../../../assets/mylogolow.jpg';
import { StyledLogo } from './styled';
import { memo } from 'react';

function Logo({ size, text }) {
  return (
    <StyledLogo href={size > 1 ? 'https://github.com/Navfront' : '/'}>
      <img
        loading='lazy'
        width={size > 1 ? '200' : '40'}
        height={size > 1 ? '100' : '40'}
        src={size > 1 ? bigLogo : logo}
        alt="Navfront.ru logo"
      />
      {size > 1 ? null : <span>{text}</span>}
    </StyledLogo>
  );
}

export default memo(Logo);
