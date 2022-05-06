import React, { useEffect, useRef, useState } from 'react';
import { StyledAboutWrapper, StyledAboutButton } from './styled';

export default function About() {
  const getIsShowFromLocalStorage = ()=>{
    if (localStorage.getItem('isShowAbout') === 'false') {
      return false;
    }
    return true;
  };

  const [canShow, setCanShow] = useState(getIsShowFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('isShowAbout', 'false');
  }, []);

  const aboutWrapperRef = useRef();


  return (
    <React.Fragment>

      <StyledAboutWrapper ref={aboutWrapperRef} isShow={canShow}>
        <h2>В&nbsp;пару кликов составим рабочий график и&nbsp;узнаем свою зарплату</h2>
        <p>Приложение, которое поможет вам сэкономить время на&nbsp;ведении личного графика работы. Вы&nbsp;можете проставить свои рабочие дни, переработки, простои, больничные и&nbsp;отпуска на&nbsp;весь год и&nbsp;рассчитать согласно этим данным свою зарплату. Данные хранятся только у&nbsp;вас в&nbsp;браузере и&nbsp;не&nbsp;передаются третьим лицам. Поэтому советую не&nbsp;чистить данные и&nbsp;историю браузера где вы&nbsp;проставили свой график.</p>
      </StyledAboutWrapper>
      <StyledAboutButton type='button' onClick={()=>{setCanShow(!canShow); aboutWrapperRef.current.style.height=canShow?'1px':'400px';}}>{canShow?'Скрыть описание':'Показать описание'}</StyledAboutButton>
    </React.Fragment>
  );
}
