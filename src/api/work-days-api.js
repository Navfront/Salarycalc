import moment from "moment";

export const twtwo =
  "11111111100000110000011000001100000110000011000001100100110000001110001100000110000011000001100000110000011000001100000111100011110001100000110000011000001100000111000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100001110000011000001100000110000011000001100000110000011000001";

const getCountOfDaysInMonth = (year, month) => {
  return moment(`${year}${month < 10 ? "0" + month : month}`, "YYYYMM").daysInMonth();
};
const getOffsetFirstDayInMonth = (year, month) => {
  const result = moment(`${year}${month < 10 ? "0" + month : month}`).day();
  return result === 0 ? 7 : result;
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
  const initArray = new Array(12).fill(new Array(42).fill({ hDay: null }), 0, 12);
  const result = initArray.map((arrMonth, monthIndex) => {
    let dayNumber = 1;
    const maxDays = getCountOfDaysInMonth(year, monthIndex + 1);
    const offSetDays = getOffsetFirstDayInMonth(year, monthIndex + 1);
    console.log(offSetDays);
    return arrMonth.map((objDay, index) => {
      if (index < offSetDays - 1 || index > maxDays + offSetDays - 2) {
        return { ...objDay, day: null };
      } else {
        return {
          ...objDay,
          day: dayNumber++,
          hDay: isNotWorkingDay(year, monthIndex + 1, index - offSetDays + 2),
          dayIndex: ++dayCounter,
        };
      }
    });
  });

  return result;
};

export const getDataArrayWithHDays = (array, holydaysString) => {
  const hDaysArray = [...holydaysString].map((item) => (item === "0" ? false : true));
  let counter = 0;
  const result = array.map((arr) => {
    return arr.map((item) => {
      if (item.dayIndex) {
        return { ...item, hDay: hDaysArray[counter++] };
      }
      return item;
    });
  });
  return result;
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
