import { StyledPMButton } from "./styled";

const PMButton = ({ bgColor, children, hSize, wSize, paddings, textColor }) => {
  return (
    <StyledPMButton textColor={textColor} bgColor={bgColor} hSize={hSize} wSize={wSize} paddings={paddings}>
      {children}
    </StyledPMButton>
  );
};

export default PMButton;
