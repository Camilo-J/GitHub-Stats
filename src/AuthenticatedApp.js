import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import { useAuth } from "./context/auth-context";
import UpdateForm from "./components/update-form";
import FavoritePage from "./pages/favorites-page";
import RepoPage from "./pages/repos-page";
import SearchPage from "./pages/search-page";
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from "./services/favorites-service";

const Div = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
`;

function AuthenticatedApp() {
  const { logout } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function handleAddFavorite(pokemon) {
    const data = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url:
        pokemon.sprites.other["official-artwork"].front_default,
    };

    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch(console.log);
  }

  function handleRemoveFavorite(pokemon) {
    const favorite = favorites.find(
      (fav) => fav.pokemon_name === pokemon?.name
    );

    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (fav) => fav.pokemon_name !== pokemon.name
      );

      setFavorites(newFavorites);
    });
  }

  return (
    <Div>
      <button onClick={logout}>Logout</button>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favorites={favorites}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
              onProfile={setProfile}
            />
          }
        />
        <Route
          path="favorites"
          element={<FavoritePage favorites={favorites} />}
        />

        <Route path="profile" element={<UpdateForm />} />

        <Route path="/users/:username">
          <Route
            path="repos"
            element={<RepoPage profile={profile}></RepoPage>}
          />
          {/* <Route path="followers" />
          <Route path="followings" /> */}
        </Route>
      </Routes>
      <Navbar></Navbar>
    </Div>
  );
}

export default AuthenticatedApp;
