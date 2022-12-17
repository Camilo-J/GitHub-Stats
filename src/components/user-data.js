import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const FavoriteButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-family: ${typography.text};
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const PokeImage = styled("img")`
  max-width: 150px;
`;

function formatId(id) {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}

export default function userData({
  user,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} /> Mark as Favorite
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} /> Remove Favorite
    </>
  );

  return (
    <div>
      <h2>{user.name}</h2>
      {/* <p>{formatId(pokemon.id)}</p> */}
      <p>#{user.id.toString().padStart(3, "0")}</p>
      <PokeImage
        src={user.sprites.other["official-artwork"].front_default}
        alt={user.name}
      />

      {user.types.map((element) => (
        <p key={element.slot}>{element.type.name}</p>
      ))}

      <p>followers: {user.followers / 65} k</p>
      <p>followings: {user.followings / 171} </p>
      <p>public repos: {user.publicRepos / 249}</p>
      <p>public gists: {user.publicGists / 72}</p>

      <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(user) : onAddFavorite(user)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  );
}
