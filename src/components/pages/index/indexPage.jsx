import React from 'react';
import Header from '../../../stories/layouts/header/Header';
import Container from './../../../stories/layouts/container/Container';
import Main from './../../../stories/layouts/main/Main';
import Footer from './../../../stories/layouts/footer/Footer';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';
import { MONTHS } from './../../../mocks/mocks';
import Nav from './../../../stories/blocks/nav/Nav';

function IndexPage() {
  return (
    <React.Fragment>
      <Header bgColor={({ theme }) => theme.colors.bg}>
        <Container>
          <Nav></Nav>
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
      <Footer bgColor={({ theme }) => theme.colors.bg}>
        <Container>This is Footer</Container>
      </Footer>
    </React.Fragment>
  );
}

export default IndexPage;
