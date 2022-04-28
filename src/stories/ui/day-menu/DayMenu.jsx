import { StyledDayMenuWrapper } from './styled';

function DayMenu({ month, dayNumber }) {
  return (
    <StyledDayMenuWrapper>
      <h2>Настройки Дня</h2>
      <p>Выберите один из вариантов:</p>
      <form action="#" method="get">
        <div className="dayTitle">
          {month} <span>{dayNumber}</span>
        </div>
        <div className="dayButtonWrapper">
          <button className="dayButton" type="button">
            8 Часов
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button className="dayButton" type="button">
            Переработка: <span> 3ч</span>
          </button>
          <button className="dayButtonPlus" type="button">
            +
          </button>
          <button className="dayButtonMinus" type="button">
            -
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button className="dayButton" type="button">
            Отпуск
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button className="dayButton" type="button">
            Простой
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button className="dayButton" type="button">
            Больничный
          </button>
        </div>
      </form>
    </StyledDayMenuWrapper>
  );
}

export default DayMenu;
