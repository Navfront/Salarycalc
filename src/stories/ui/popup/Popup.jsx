import { StyledPopup } from './styled';

function Popup({ isShow = false, children }) {
  return <StyledPopup isShow={isShow}>{children}</StyledPopup>;
}
export default Popup;
