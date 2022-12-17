import { useEffect, useState } from "react";
import { Input } from "../components/input";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { getGitProfile } from "../services/gitapi-service";

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



function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState("");

  // inactivo - resuelto - error
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: profile, error } = state;

  const isFavorite = Boolean(
    favorites.find((fav) => fav.user_name === profile?.name)
  );

  useEffect(() => {
    //Get GitApi
    getGitProfile(query)
      .then((data) => {
        console.log(data);
        setState({ status: "succes", data: data, error: null });
      })
      .catch(console.log);

    console.log("");
  }, [query]);

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });

    
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button> 
      </Form>
      {status === "pending" && "Retrieving user..."}

      {/* {status === "success" && (
        <PokemonData
          pokemon={pokemon}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )} */}
      <MainView>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="logo"
        />
      </MainView>
      <p>profile</p>
      {status === "idle" && "No user..."}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/favorites">Go to Favorites</Link>
    </Container>
  );
}

export default SearchPage;
