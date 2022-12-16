import styled from "@emotion/styled";
import { colors, typography } from "../styles";

export const StyledButton = styled("button")`
  border: none;
  width: 80px;
  height: 36px;
  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 auto 0 auto
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
<<<<<<< HEAD
  border: none;
  background: #FFFFFF;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
=======
  
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
>>>>>>> c56cea4daf64dae2a74a8134b15c4fecab3cf375
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
<<<<<<< HEAD
    <StyledDiv>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
=======
    <Wrapper>
      {label && <Label htmlFor={id || name}>{label}</Label>}
>>>>>>> c56cea4daf64dae2a74a8134b15c4fecab3cf375
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
<<<<<<< HEAD
    </StyledDiv>
=======
    </Wrapper>
>>>>>>> c56cea4daf64dae2a74a8134b15c4fecab3cf375
  );
}


