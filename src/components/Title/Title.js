import { StyledTitle } from "./TItle.styles";

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h3>{title}</h3>
    </StyledTitle>
  );
};

export default Title;
