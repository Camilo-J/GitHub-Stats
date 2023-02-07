import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input, StyledButton, StyledDivForm } from "./input";

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(formData);
  }

  return (
    <StyledDivForm>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          marginTop: "96px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
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
        <StyledButton type="submit">Login</StyledButton>
      </form>
    </StyledDivForm>
  );
}

export default LoginForm;
