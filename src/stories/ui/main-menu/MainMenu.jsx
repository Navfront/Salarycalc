import { StyledMainMenuLayout, StyledMainMenuTitle, StyledMainMenuWrapper } from './styled';

function MainMenu() {
  return (
    <StyledMainMenuLayout>
      <StyledMainMenuWrapper active>
        <StyledMainMenuTitle>Настройки</StyledMainMenuTitle>
        <form action="#" method="post">
          <fieldset>
            <legend>Тарифы</legend>
            <label htmlFor="defaultRate">Обычные часы</label>
            <p>
              <input id="defaultRate" type="number" />
              <button type="button">уст.</button>
              <span>-132323</span>
            </p>
            <label htmlFor="extraRate">Переработка</label>
            <p>
              <input id="extraRate" type="number" />
              <button type="button">уст.</button>
              <span>-1123</span>
            </p>
            <label htmlFor="holidayRate">Выходной день</label>
            <p>
              <input id="holidayRate" type="number" />
              <button type="button">уст.</button>
              <span>-11</span>
            </p>
            <label htmlFor="sickRate">Больничный</label>
            <p>
              <input id="sickRate" type="number" />
              <button type="button">уст.</button>
              <span>-1332</span>
            </p>
          </fieldset>
        </form>
      </StyledMainMenuWrapper>
    </StyledMainMenuLayout>
  );
}

export default MainMenu;
