import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const StyledInput = styled("input")`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;

  width: 213px;
  height: 28px;

  border: 1px solid #D3D3D3;
  justify-content: center;

  background: #FFFFFF;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  ::placeholder {
    color: ${colors.gray.light};
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
  gap: 4px;

  width: 213px;
  height: 52px;
`

const Label = styled.label`
  display: flex;
  width: 100%;
  ${typography.text.md};
  margin: 0;
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default Input;
