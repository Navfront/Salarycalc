import { StyledDayMenuWrapper } from './styled';
import { useState } from 'react';
import { MONTHS } from './../../../mocks/mocks';
import { useDispatch } from 'react-redux';
import { setCalendarValue, togglePopup } from '../../../redux/actions';

//DATA:
// {activity: null 1 2 3
// day: 19
// dayIndex: 19
// extra: null
// hDay: false
// money: 0
// month: 0}

function DayMenu({ data,cb }) {
  const [extraCount, setExtraCount] = useState(3);
  const setDay = useDispatch();
  const dispatchCloseClick = useDispatch();
  const closePopup = () => {
    dispatchCloseClick(togglePopup(null));
  };

  return (
    <StyledDayMenuWrapper>
      <h2>Настройки Дня</h2>
      <p></p>
      <p>Выберите один из вариантов:</p>
      <form action="#" method="get">
        <div className="dayTitle">
          <span>{MONTHS[data.month]}</span> <span className="dayNumber">{data.day}</span>
          {data.hDay ? <span>(выходной)</span> : <span className="dayDescription">(рабочий день)</span>}
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {

              setDay(setCalendarValue({ ...data, activity: 1, extra: null }));
              cb(1);
              closePopup();

            }}
          >
            8 Часов
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              setDay(setCalendarValue({ ...data, activity: 1, extra: extraCount }));
              cb(1);
              closePopup();
            }}
          >
            Переработка: <span> {extraCount}ч</span>
          </button>

          <div className="plusMinusWrapper">
            <button
              onClick={() => {
                setExtraCount(extraCount + 1);
              }}
              className="dayButtonPlus"
              type="button"
            >
              +
            </button>

            <button
              onClick={() => {
                setExtraCount(extraCount > 0 ? extraCount - 1 : extraCount);
              }}
              className="dayButtonMinus"
              type="button"
            >
              -
            </button>
          </div>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              setDay(setCalendarValue({ ...data, activity: 3 }));
              cb(3);
              closePopup();
            }}
          >
            Отпуск
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              setDay(setCalendarValue({ ...data, activity: 4 }));
              cb(4);
              closePopup();
            }}
          >
            Простой
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              setDay(setCalendarValue({ ...data, activity: 2 }));
              cb(2);
              closePopup();
            }}
          >
            Больничный
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              setDay(setCalendarValue({ ...data, activity: null }));
              cb(0);
              closePopup();
            }}
          >
            Очистить
          </button>
        </div>
      </form>
    </StyledDayMenuWrapper>
  );
}

export default DayMenu;
