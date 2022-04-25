import Header from "../../../stories/layouts/header/Header";
import Container from "./../../../stories/layouts/container/Container";
import Main from "./../../../stories/layouts/main/Main";
import PMButton from "./../../../stories/ui/pm-button/PMbutton";
import Footer from "./../../../stories/layouts/footer/Footer";
import Counter from "../../ui/counter";
import { useEffect, useState } from "react";
import moment from "moment";

const getFirstDayYearString = (year) => {
  return `${year}0101`;
};
const getCountOfDaysInMonth = (year, month) => {
  return moment(`${year}${month}`, "YYYYMM").daysInMonth();
};

let data = moment(getFirstDayYearString(2022)).day(); // первый день года

const IndexPage = ({ store }) => {
  const [momentus, setMomentus] = useState("");
  useEffect(() => {
    setMomentus(data);
    const workDaysData = new Array(12).fill(new Array(49).fill({}), 0, 12);
    const newArr = workDaysData.map((arrMonth, monthIndex) => {
      const maxDays = getCountOfDaysInMonth(2022, monthIndex + 1);
      const offSetDays = 5; // надо определить
      console.log(maxDays);
      return arrMonth.map((objDay, index) => {
        {
          if (index >= maxDays + offSetDays || index < offSetDays) {
            return { ...objDay, day: null };
          } else return { ...objDay, day: index - offSetDays + 1 };
        }
      });
    });

    console.log(workDaysData);
    console.log("!", newArr);
  });

  return (
    <>
      <Header bgColor="gold">
        <Container>This is Header</Container>{" "}
      </Header>
      <Main bgColor="lightblue">
        <Container>
          This is Main
          <PMButton
            bgColor="#333"
            textColor="white"
            paddings="5px 10px"
            onClick={() => {
              store.dispatch({ type: "counter/incremented" });
            }}
          >
            Прибавить 10
          </PMButton>
          <Counter store={store} value={"0"} />
          <PMButton
            onClick={() => {
              store.dispatch({ type: "counter/decremented" });
            }}
            bgColor="#333"
            textColor="white"
            paddings="5px 10px"
          >
            Отнять 10
          </PMButton>
          <p>{momentus}</p>
        </Container>
      </Main>
      <Footer bgColor="dark">
        <Container>This is Footer</Container>
      </Footer>
    </>
  );
};

export default IndexPage;
