import React from 'react';
import Header from '../../../stories/layouts/header/Header';
import Container from './../../../stories/layouts/container/Container';
import Main from './../../../stories/layouts/main/Main';
import Footer from './../../../stories/layouts/footer/Footer';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';
import { MONTHS } from './../../../mocks/mocks';
import Nav from './../../../stories/blocks/nav/Nav';
import Logo from '../../../stories/ui/logo/Logo';

function IndexPage() {
  return (
    <React.Fragment>
      <Header>
        <Container>
          <Nav></Nav>
        </Container>
      </Header>
      <Main>
        <Container>
          {MONTHS.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <WorkCalendar title={item} key={index} month={index} />
          ))}
        </Container>
      </Main>
      <Footer>
        <Logo size="2" />
        <p> Nazhiganov A.V. © {new Date().getFullYear()}</p>
      </Footer>
    </React.Fragment>
  );
}

export default IndexPage;
