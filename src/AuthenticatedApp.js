import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import UpdateForm from "./components/update-form";
import FavoritePage from "./pages/favorites-page";
import RepoPage from "./pages/repos-page";
import FollowersPage from "./pages/followers-page";
import SearchPage from "./pages/search-page";
import FollowingPage from "./pages/following-page";
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
  const [favorites, setFavorites] = useState([]);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function handleAddFavorite() {
    const data = {
      githubUser_name: profile?.name,
      githubUser_username: profile?.login,
      githubUser_avatar_url: profile?.avatar_url,
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
            path="followers"
            element={<FollowersPage profile={profile}></FollowersPage>}
          />
          <Route
            path="followings"
            element={<FollowingPage profile={profile}></FollowingPage>}
          />
          <Route
            path="repos"
            element={<RepoPage profile={profile}></RepoPage>}
          />
        </Route>
      </Routes>
      <Navbar></Navbar>
    </Div>
  );
}

export default AuthenticatedApp;
