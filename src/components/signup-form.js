import { useState } from "react";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { useAuth } from "../context/auth-context";
import { Input } from "./input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 213px;
  height: 424px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 36px;
  width: 213px;
  height: 424px;
`;

const StyledButton = styled.button`
  display: flex;
  width: 167px;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${colors.blue[500]};
  border-radius: 0.5rem;
  color: ${colors.white};
  border: none;
  ${typography.text.md}
  line-height: 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray[300]};
  }
`;

function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    signup(formData);
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />
        <Input
          name="first_name"
          type="first_name"
          value={first_name}
          onChange={handleChange}
          placeholder="*******"
          label="First Name"
        />
        <Input
          name="last_name"
          type="last_name"
          value={last_name}
          onChange={handleChange}
          placeholder="*******"
          label="Last Name"
        />
        <StyledButton type="submit">Create Account</StyledButton>
      </Form>
    </Wrapper>
  );
}

export default SignupForm;
