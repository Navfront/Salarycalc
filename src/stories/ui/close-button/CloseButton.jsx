import { StyledCloseButton } from './styled';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../../redux/actions';

function CloseButton({ children }) {
  const dispatchCloseClick = useDispatch();
  const handlerOnClick = () => {
    dispatchCloseClick(togglePopup(null));
  };

  return (
    <StyledCloseButton onClick={handlerOnClick} className="сloseButton">
      {children}
    </StyledCloseButton>
  );
}

export default CloseButton;
