import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors } from "./styles";

const CustomLink = styled("button")`
  border: none;
  background: none;
  cursor: pointer;
  color: ${colors.blue[500]};
  &:hover {
    color: ${colors.gray.medium};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TotalWrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 220px;
left: calc(50% - 264px/2 + 0.5px);
top: 48px;
text-align: center;
font-style: normal;

font-weight: 500;
`;

const MainTitle = styled.h1`
  display: flex;

  margin-bottom: 96px;

  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-style: normal;
  font-weight: 400;
`

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkChange(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }

  return (
    <Wrapper>
      <TotalWrapper>
        <MainTitle>Welcome to Poke Collection</MainTitle>
        {showLogin ? <LoginForm /> : <SignupForm />}

        <CustomLink onClick={handleLinkChange}>
          {showLogin ? "Create Account" : "Log in"}
        </CustomLink>
      </TotalWrapper>
    </Wrapper>
  );
}

export default UnauthenticatedApp;
