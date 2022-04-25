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
  return moment(`${year}${month < 10 ? "0" + month : month}`, "YYYYMM").daysInMonth();
};
const getOffsetFirstDayInMonth = (year, month) => {
  return moment(`${year}${month < 10 ? "0" + month : month}`).day();
};

const isNotWorkingDay = (year, month, day) => {
  if (day < 1) {
    return false;
  }
  const fYear = `${year}`;
  const fMonth = `${month < 10 ? "0" + month : month}`;
  const fDay = `${day < 10 ? "0" + day : day}`;

  if (moment(`${fYear}${fMonth}${fDay}`).day() === 0 || moment(`${fYear}${fMonth}${fDay}`).day() === 6) return true;

  return false;
};

const getHolidaysFetch = (year) => {
  try {
    fetch(`https://isdayoff.ru/api/getdata?date1=${year}0101&date2=${year}1231`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ответ сети был не ok.");
        }
        return res.text();
      })
      .then((data) => console.log(data));
  } catch (error) {
    console.log("Возникла проблема с вашим запросом: ", error.message);
  }
};

const getWorkDaysDataArray = (year) => {
  let dayCounter = 0;
  const initArray = new Array(12).fill(new Array(49).fill({ hDay: null }), 0, 12);
  const result = initArray.map((arrMonth, monthIndex) => {
    const maxDays = getCountOfDaysInMonth(year, monthIndex + 1);
    const offSetDays = getOffsetFirstDayInMonth(year, monthIndex + 1);
    return arrMonth.map((objDay, index) => {
      if (index >= maxDays + offSetDays || index < offSetDays) {
        return { ...objDay, day: null };
      } else {
        dayCounter++;
        return {
          ...objDay,
          day: index - offSetDays + 1,
          hDay: isNotWorkingDay(year, monthIndex + 1, index - offSetDays + 1),
          dayIndex: dayCounter,
        };
      }
    });
  });
  return result;
};
const twtwo =
  "11111111100000110000011000001100000110000011000001100100110000001110001100000110000011000001100000110000011000001100000111100011110001100000110000011000001100000111000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100001110000011000001100000110000011000001100000110000011000001";
const getDataArrayWithHDays = (array, holydaysString) => {
  const hDaysArray = [...holydaysString].map((item) => (item === "0" ? false : true));
  console.log("do", array);
  let counter = 0;
  const result = array.map((arr) => {
    return arr.map((item) => {
      if (item.dayIndex) {
        return { ...item, hDay: hDaysArray[counter++] };
      }
      return item;
    });
  });
  console.log("new", result);
};

const IndexPage = ({ store }) => {
  const [momentus, setMomentus] = useState("");
  useEffect(() => {
    console.log(getDataArrayWithHDays(getWorkDaysDataArray(2022), twtwo));
  }, []);

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
