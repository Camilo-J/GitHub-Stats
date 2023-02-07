import styled from "@emotion/styled";
import { colors } from "../styles";

export const StyledButton = styled("button")`
  border: none;
  color: white;
  width: 80px;
  height: 36px;
  background: #2d9cdb;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 auto 0 auto;
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
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  align-items: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;

  width: 213px;
  height: 28px;

  border: 1px solid #d3d3d3;
  justify-content: center;

  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);

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
