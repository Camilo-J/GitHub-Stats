import styled from "@emotion/styled";

import CardIconFavorite from "../components/CardIconfavorite";
import { RiStarFill } from "react-icons/ri";
import { colors } from "../styles";
import { useState } from "react";

import Image from "../assets/Vector.png";
import Image1 from "../assets/Vector1.png";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

function FavoritePage({ favorites }) {
  const [page, setPage] = useState(1);

  const pageNumber = Math.ceil(favorites.length / 7);

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

  let category = 0;
  let groupByCategory = favorites.reduce((accu, product, index) => {
    if (index % 7 === 0) {
      category++;
    }
    accu[category] = accu[category] ?? [];
    accu[category].push(product);
    return accu;
  }, {});

  return (
    <Wrapper>
      <MainTitle>Favorites ({favorites.length})</MainTitle>

      <Pagination>
        <img src={Image} alt="" onClick={handleDecresePage}></img>
        {[...Array(pageNumber)].map((x, index) => (
          <PagButton key={index} current={page}>
            {index + 1}
          </PagButton>
        ))}
        <img src={Image1} alt="" onClick={handleIncresePage}></img>
      </Pagination>

      {groupByCategory[`${page}`]?.map((fav, index) => (
        <CardIconFavorite
          key={index}
          username={fav.username}
          name={fav.name}
          avatar={fav.avatar_url}
          icon={
            <RiStarFill
              color={colors.yellow[500]}
              style={{ height: "24px", width: "25px" }}
            />
          }
        ></CardIconFavorite>
      ))}
    </Wrapper>
  );
}

export default FavoritePage;
