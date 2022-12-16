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

export default function PokemonData({
  pokemon,
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
      <h2>{pokemon.name}</h2>
      {/* <p>{formatId(pokemon.id)}</p> */}
      <p>#{pokemon.id.toString().padStart(3, "0")}</p>
      <PokeImage
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />

      {pokemon.types.map((element) => (
        <p key={element.slot}>{element.type.name}</p>
      ))}

      <p>Weight: {pokemon.weight / 10} kg</p>
      <p>Height: {pokemon.height / 10} m</p>

      <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(pokemon) : onAddFavorite(pokemon)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  );
}
