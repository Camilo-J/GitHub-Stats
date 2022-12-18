import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import CardIcon from "../components/CardIcon";
import CardIconFavorite from "../components/CardIconfavorite";
import { RiStarFill, RiCodeBoxFill, RiStarLine } from "react-icons/ri";
import { colors, typography } from "../styles";

const typeColors = {
  grass: "#74CB48",
  electric: "#F9CF30",
  fire: "#F57D31",
};

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

const PokeCard = styled("div")`
  border: 2px solid ${({ type }) => typeColors[type]};
`;

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      <MainTitle>Favorites ({favorites.length})</MainTitle>
      {favorites.map((fav) => <CardIconFavorite username={fav.username} name={fav.name} avatar={fav.avatar_url} icon={<RiStarFill color={colors.yellow[500]} style={{ height:"24px", width:"25px" }} />}></CardIconFavorite>)}
    </Wrapper>
  );
}

export default FavoritePage;
