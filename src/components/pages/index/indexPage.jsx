import Header from '../../../stories/layouts/header/Header';
import Container from './../../../stories/layouts/container/Container';
import Main from './../../../stories/layouts/main/Main';
import Footer from './../../../stories/layouts/footer/Footer';
import WorkCalendar from '../../../stories/ui/work-calendar/WorkCalendar';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

function IndexPage() {
  return (
    <div>
      <Header bgColor={({ theme }) => theme.colors.bg}>
        <Container>This is Header</Container>
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
    </div>
  );
}

export default IndexPage;
