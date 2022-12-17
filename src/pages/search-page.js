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

  // const isFavorite = Boolean(
    // favorites.find((fav) => fav.user_name === profile?.name)
  // );

  useEffect(() => {
    // Get GitApi
    // setState({ status: "pending", data: null, error: null });
    getGitProfile(query)
      .then((data) => {
        console.log(data)
        if (data.message == "Not Found") throw new Error("No users...") 
        setState({ status: "success", data: data, error: null });
          
      })
      .catch((error)=> {
        console.log(error.messsage)
        setState({ status: "error", data: null, error: error.message });
      });

  }, [query]);

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });
    console.log(event.target.value)
    
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
          <img src={profile.avatar_url}/> 
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
      {status === "idle" && "No user..."} 
      {status === "error" && <p style={{ color: "red" }}>{error.message}</p>}
    </Container>
  );
}

export default SearchPage;
