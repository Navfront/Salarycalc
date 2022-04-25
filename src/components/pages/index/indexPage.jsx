import Header from "../../../stories/layouts/header/Header";
import Container from "./../../../stories/layouts/container/Container";
import Main from "./../../../stories/layouts/main/Main";
import Footer from "./../../../stories/layouts/footer/Footer";
import WorkCalendar from "../../../stories/ui/work-calendar/WorkCalendar";

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const IndexPage = ({ store }) => {
  return (
    <>
      <Header bgColor={({ theme }) => theme.colors.bg}>
        <Container>This is Header</Container>{" "}
      </Header>
      <Main bgColor={({ theme }) => theme.colors.bg}>
        <Container>
          {MONTHS.map((item, index) => (
            <WorkCalendar title={item} key={index} month={index} />
          ))}
        </Container>
      </Main>
      <Footer bgColor={({ theme }) => theme.colors.bg}>
        <Container>This is Footer</Container>
      </Footer>
    </>
  );
};

export default IndexPage;
