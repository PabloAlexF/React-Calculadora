import { ButtonContainer } from "./styles";

const Button = ({label, OnClick}) => {
  return (
    <ButtonContainer onClick={OnClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;