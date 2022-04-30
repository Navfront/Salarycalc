import { StyledPopup } from './styled';
import { useSelector } from 'react-redux';

function Popup({ children }) {
  const popupObject = useSelector((state) => state.appReducer.popup);

  // eslint-disable-next-line no-console
  console.log(popupObject);

  return <StyledPopup isShow={popupObject.isOpen}>{children}</StyledPopup>;
}
export default Popup;
