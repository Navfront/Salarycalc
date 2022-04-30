import { StyledCloseButton } from './styled';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../../redux/actions';

function CloseButton({ children }) {
  const dispapatchCloseClick = useDispatch();
  const handlerOnClick = () => {
    dispapatchCloseClick(togglePopup(null));
  };

  return (
    <StyledCloseButton onClick={handlerOnClick} className="сloseButton">
      {children}
    </StyledCloseButton>
  );
}

export default CloseButton;
