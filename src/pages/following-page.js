import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { typography } from "../styles";
import { getGitProfileFollowings } from "../services/gitapi-service";

import Image from "../assets/Vector.png";
import Image1 from "../assets/Vector1.png";

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
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FollowersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

const FollowersCard = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  width: 300px;
  height: 56px;
  ${typography.text.md};
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const PokeImage = styled.img`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  gap: 8px;
  width: 202px;
  height: 30px;
  svg {
    font-size: 4rem;
  }
`;

const PagButton = styled.button`
  all: unset;
  text-align: center;
  color: ${({ current, children }) =>
    current === children ? "#fff" : "#00000"};
  display: flex;
  flex-direction: column;
  padding: 1px 8px;
  gap: 10px;

  background: ${({ current, children }) =>
    current === children ? "#2d9cdb" : ""};
  border-radius: 50px;
`;

function FollowingPage({ profile }) {
  const [followings, setFollowings] = useState([]);
  const [page, setPage] = useState(1);

  const pageNumber = Math.ceil(profile.followers / 7);

  function handleDecresePage() {
    if (page === 1) return;

    const newPage = page - 1;
    setPage(newPage);
  }

  function handleIncresePage() {
    if (page === pageNumber) return;
    const newPage = page + 1;
    setPage(newPage);
  }

  useEffect(() => {
    getGitProfileFollowings(profile.login, page)
      .then((data) => {
        setFollowings(data);
      })
      .catch(console.log);
  }, [profile, page]);

  return (
    <Wrapper>
      <MainTitle>Followings ({profile.following})</MainTitle>

      <Pagination>
        <img src={Image} alt="" onClick={handleDecresePage}></img>
        {[...Array(pageNumber)].map((x, index) => (
          <PagButton key={index} current={page}>
            {index + 1}
          </PagButton>
        ))}
        <img src={Image1} alt="" onClick={handleIncresePage}></img>
      </Pagination>

      <FollowersContainer>
        {followings.map((following) => (
          <FollowersCard value={following.login} key={following.id}>
            <PokeImage src={following?.avatar_url} alt="icono" />
            {following.login}
          </FollowersCard>
        ))}
      </FollowersContainer>
      <Link to="/">Go back </Link>
    </Wrapper>
  );
}

export default FollowingPage;
