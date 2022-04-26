import React, { useState } from 'react';
import Header from '../../../stories/layouts/header/Header';
import Container from './../../../stories/layouts/container/Container';
import Main from './../../../stories/layouts/main/Main';
import Footer from './../../../stories/layouts/footer/Footer';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';
import { MONTHS } from './../../../mocks/mocks';
import Nav from './../../../stories/blocks/nav/Nav';
import Logo from '../../../stories/ui/logo/Logo';
import MainMenu from '../../../stories/blocks/main-menu/MainMenu';

function IndexPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handlerOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <Header bgColor={({ theme }) => theme.colors.bgLAccent}>
        <Container>
          <Nav cb={handlerOpenMenu}></Nav>
          <MainMenu active={isMenuOpen} />
        </Container>
      </Header>
      <Main bgColor={({ theme }) => theme.colors.bg}>
        <Container>
          {MONTHS.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <WorkCalendar title={item} key={index} month={index} />
          ))}
        </Container>
      </Main>
      <Footer paddings="25px" bgColor={({ theme }) => theme.colors.bg}>
        <Logo size="2" />
        <p> Nazhiganov A.V. © {new Date().getFullYear()}</p>
      </Footer>
    </React.Fragment>
  );
}

export default IndexPage;
