import { useState } from "react";

import Input from "../components/input";
import { getPokemon } from "../services/pokeapi-service";
import PokemonData from "../components/pokemon-data";
import { Link } from "react-router-dom";

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState("");

  // inactivo - resuelto - error
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: pokemon, error } = state;

  const isFavorite = Boolean(
    favorites.find((fav) => fav.pokemon_name === pokemon?.name)
  );

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });

    // getPokemon(query)
    //   .then((data) => {
    //     setState({ status: "success", data: data, error: null });
    //   })
    //   .catch((error) => {
    //     setState({
    //       status: "error",
    //       data: null,
    //       error: "El pokemon no existe! Intenta de nuevo",
    //     });
    //   });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="pokemon name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {status === "pending" && "Loading..."}
      {status === "idle" && "Ready to search"}
      {/* {status === "success" && (
        <PokemonData
          pokemon={pokemon}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )} */}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
}

export default SearchPage;
