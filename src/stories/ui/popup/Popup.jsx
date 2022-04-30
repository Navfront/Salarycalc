import { StyledPopup } from './styled';
import { useSelector } from 'react-redux';
import DayMenu from './../day-menu/DayMenu';
import CloseButton from '../close-button/CloseButton';

function Popup() {
  const popupObject = useSelector((state) => state.appReducer.popup);

  // eslint-disable-next-line no-console
  console.log(popupObject);

  return (
    <StyledPopup isShow={popupObject.isOpen}>
      {popupObject.data ? <DayMenu data={popupObject.data} /> : null}
      <CloseButton />
    </StyledPopup>
  );
}
export default Popup;
