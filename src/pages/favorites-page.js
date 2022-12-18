import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import CardIcon from "../components/CardIcon";
import CardIconFavorite from "../components/CardIconfavorite";

const typeColors = {
  grass: "#74CB48",
  electric: "#F9CF30",
  fire: "#F57D31",
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PokeCard = styled("div")`
  border: 2px solid ${({ type }) => typeColors[type]};
`;

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      {favorites.map((fav) => <CardIconFavorite username={fav.username} name={fav.name} avatar={fav.avatar_url}></CardIconFavorite>)}
    </Wrapper>
  );
}

export default FavoritePage;
