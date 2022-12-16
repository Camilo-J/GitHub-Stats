import styled from "@emotion/styled";
import { colors } from "../styles";

export const StyledButton = styled("button")`
  border: none;
  width: 80px;
  height: 36px;
  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const StyledDivForm = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const StyledLabel = styled("label")`
  text-align: left;
`;

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  width: 213px;
 
`;

const StyledInput = styled("input")`
  border: none;
  background: #FFFFFF;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  border-radius: 4px;
  ::placeholder {
    color: ${colors.gray.light};
  }
`;



export function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <StyledDiv>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
}


