import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const CustomLink = styled("button")`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  color: #2d9cdb;
  &:hover {
    color: #0d8fd9;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 264px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
`;

const MainTitle = styled.h1`
  line-height: 40px;
  font-size: 2em;
  font-style: normal;
  font-weight: 500;
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkChange(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }

  return (
    <Wrapper>
      <TotalWrapper>
        <MainTitle>Welcome to GitHub Stats</MainTitle>
        {showLogin ? <LoginForm /> : <SignupForm />}

        <CustomLink onClick={handleLinkChange}>
          {showLogin ? "Create Account" : "Log in"}
        </CustomLink>
      </TotalWrapper>
    </Wrapper>
  );
}

export default UnauthenticatedApp;
