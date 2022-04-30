import { MONTHS } from './../mocks/mocks';

const calcSalary = (monthNumber = 0, { defaultRate, extraRate, holidayRate, sickRate } = null) => {
  // eslint-disable-next-line no-undef
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!localStorage.getItem('calendar') || !defaultRate) {
        reject(`Ошибка подсчета ${MONTHS[monthNumber]}`);
      }
      const workCalendar = JSON.parse(localStorage.getItem('calendar'));
      let salary = 0;

      workCalendar[monthNumber].forEach((dayItem) => {
        if (dayItem.activity > 0) {
          // eslint-disable-next-line no-console
          console.log(dayItem);
          switch (dayItem.activity) {
            case 1:
              if (dayItem.hDay && !dayItem.extra) {
                salary = salary + 8 * holidayRate;
                break;
              }
              if (dayItem.hDay && dayItem.extra) {
                salary = salary + (8 + dayItem.extra) * holidayRate;
              }
              salary =
                dayItem.extra > 0 ? salary + 8 * defaultRate + dayItem.extra * extraRate : salary + 8 * defaultRate;
              break;

            case 2:
              //болезнь
              salary = salary + 8 * sickRate;
              break;

            case 3:
              //отпуск

              break;

            case 4:
              //простой
              break;

            default:
              break;
          }
        }
      });

      resolve(`Зарплата за ${MONTHS[monthNumber]}:${salary}`);
    }, 1000);
  });

  return result;
};

export default calcSalary;
