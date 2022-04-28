import { StyledCloseButton } from './styled';

function CloseButton({ children }) {
  return <StyledCloseButton className="CloseButton">{children}</StyledCloseButton>;
}

export default CloseButton;
