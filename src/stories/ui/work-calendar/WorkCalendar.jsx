import {
  HiddenWorkCalendarTitle,
  STd,
  STr,
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarTable,
} from "./styled";
//https://isdayoff.ru/api/getdata?year=2022&month=04 api
//011000001100000110000011000001
const WorkCalendar = ({ hiddenTitle, title, cellSize }) => {
  return (
    <StyledWorkCalendar>
      <HiddenWorkCalendarTitle>{hiddenTitle}</HiddenWorkCalendarTitle>

      <StyledWorkCalendarTable cellSize={cellSize}>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <STr>
          <STd>1</STd>
          <STd>2</STd>
          <STd>3</STd>
          <STd>4</STd>
          <STd>5</STd>
          <STd>6</STd>
          <STd>7</STd>
        </STr>
        <STr>
          <STd>8</STd>
          <STd>9</STd>
          <STd>10</STd>
          <STd>11</STd>
          <STd>12</STd>
          <STd>13</STd>
          <STd>14</STd>
        </STr>
        <STr>
          <STd>15</STd>
          <STd>16</STd>
          <STd>17</STd>
          <STd>18</STd>
          <STd>19</STd>
          <STd>20</STd>
          <STd>21</STd>
        </STr>
        <STr>
          <STd>22</STd>
          <STd>23</STd>
          <STd>24</STd>
          <STd>25</STd>
          <STd>26</STd>
          <STd>27</STd>
          <STd>28</STd>
        </STr>
        <STr>
          <STd>29</STd>
          <STd>30</STd>
          <STd>31</STd>
          <STd></STd>
          <STd></STd>
          <STd></STd>
          <STd></STd>
        </STr>
      </StyledWorkCalendarTable>
    </StyledWorkCalendar>
  );
};

export default WorkCalendar;
