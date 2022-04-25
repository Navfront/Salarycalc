import moment from "moment";

export const twtwo =
  "11111111100000110000011000001100000110000011000001100100110000001110001100000110000011000001100000110000011000001100000111100011110001100000110000011000001100000111000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100001110000011000001100000110000011000001100000110000011000001";

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

export const getDataArrayWithHDays = (array, holydaysString) => {
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

export const getHolidaysFetch = (year) => {
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

export default getWorkDaysDataArray;
