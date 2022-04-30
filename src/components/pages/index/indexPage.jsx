import React from 'react';
import Container from './../../../stories/layouts/container/Container';
import Header from '../../../stories/layouts/header/Header';
import Main from './../../../stories/layouts/main/Main';
import Footer from './../../../stories/layouts/footer/Footer';
import Nav from './../../../stories/blocks/nav/Nav';
import Logo from '../../../stories/ui/logo/Logo';
import Popup from './../../../stories/ui/popup/Popup';
import CloseButton from './../../../stories/ui/close-button/CloseButton';

function IndexPage() {
  return (
    <React.Fragment>
      <Header>
        <Container>
          <Nav></Nav>
        </Container>
      </Header>
      <Main></Main>
      <Footer>
        <Logo size="2" />
        <p> Nazhiganov A.V. © {new Date().getFullYear()}</p>
      </Footer>
      <Popup>
        <CloseButton />
      </Popup>
    </React.Fragment>
  );
}

export default IndexPage;
