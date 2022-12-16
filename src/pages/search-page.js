import { useEffect, useState } from "react";
import { Input } from "../components/input";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { getGitProfile } from "../services/gitapi-service";
import Repo from "../components/repoGithub";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  padding-top: 2rem;
  padding-bottom: 2.5625rem;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
`;

const Img = styled("img")`
  witdh: 7.5rem;
  height: 7.5rem;
`;

const MainView = styled("div")``;

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite, onProfile }) {
  const [query, setQuery] = useState("");

  // inactivo - resuelto - error
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });

  const { status, data: profile, error } = state;

  useEffect(() => {
    //Get GitApi
    setState({ status: "pending", data: null, error: null });

    getGitProfile(query)
      .then((data) => {
        onProfile(data);
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({ status: "error", data: null, error: error.message });
      });
  }, [query, onProfile]);

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });

    getGitProfile(query)
      .then((data) => {
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intenta de nuevo",
        });
      });

  }

  return (
    <Container>
      <Form>
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <button type="submit">Search</button>   */}
      </Form>

      {status === "pending" && "Retrieving user..."}

      {status === "success" && (
        // <PokemonData
        //   pokemon={pokemon}
        //   onAddFavorite={onAddFavorite}
        //   onRemoveFavorite={onRemoveFavorite}
        //   isFavorite={isFavorite}
        // />
        <div>
          <h1> {profile?.name} </h1>
          <img src={profile.avatar_url} alt={"Git user"} />
          <p>followers: {profile.followers}</p>
          <p>followings: {profile.following}</p>
          <p>public repos: {profile.public_repos}</p>
          <p>public gists: {profile.public_gists}</p>
        </div>
      )}
      {/* <MainView> */}
      {/* <Img */}
      {/* // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          // alt="logo"
        // /> */}
      {/* </MainView> */}

      <PokemonData
        user={profile}
        onAddFavorite={onAddFavorite}
        onRemoveFavorite={onRemoveFavorite}
        isFavorite={isFavorite}
      />


      {status === "idle" && "No user..."}

      {status === "error" && query !== "" && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      <Link to="/favorites">Go to Favorites</Link>
      <Link to={`users/${profile?.login}/repos`}>RepossGit</Link>
    </Container>
  );
}

export default SearchPage;
