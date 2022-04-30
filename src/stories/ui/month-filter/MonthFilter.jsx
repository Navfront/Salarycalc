import { StyledMonthFilter } from './styled';
import { MONTHS } from './../../../mocks/mocks';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterShow } from '../../../redux/actions';
import moment from 'moment';

function MonthFilter() {
  const showObj = useSelector((state) => state.appReducer.monthFilter);
  const currentMonth = moment().month();
  const handlerOnFilter = useDispatch();

  return (
    <StyledMonthFilter>
      <form action="#" method="get">
        <div className="monthFilterWrapper">
          <button type="button" onClick={() => handlerOnFilter(setFilterShow({ showMonth: 0, showType: 0 }))}>
            Все месяца
          </button>
          <button
            type="button"
            onClick={() => handlerOnFilter(setFilterShow({ showMonth: currentMonth, showType: 2 }))}
          >
            Текущий
          </button>
          <button
            type="button"
            onClick={() => handlerOnFilter(setFilterShow({ showMonth: currentMonth, showType: 1 }))}
          >
            Тек.+ пред.
          </button>
        </div>
        <select
          size="1"
          onChange={(evt) => handlerOnFilter(setFilterShow({ showMonth: Number(evt.target.value), showType: 2 }))}
        >
          {MONTHS.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={index} name={index} value={index} selected={currentMonth === index}>
              {item}
            </option>
          ))}
        </select>
      </form>
      {showObj.showType > 0 ? (
        <div className="monthFilterNextWrapper">
          <button
            disabled={showObj.showMonth === 0}
            type="button"
            className="buttonToLeft"
            onClick={() =>
              handlerOnFilter(setFilterShow({ showMonth: Number(showObj.showMonth) - 1, showType: showObj.showType }))}
          >
            Предыдущий
          </button>
          <button
            disabled={showObj.showMonth > 10}
            type="button"
            className="buttonToRight"
            onClick={() =>
              handlerOnFilter(setFilterShow({ showMonth: Number(showObj.showMonth) + 1, showType: showObj.showType }))}
          >
            Следующий
          </button>
        </div>
      ) : null}
    </StyledMonthFilter>
  );
}

export default MonthFilter;
