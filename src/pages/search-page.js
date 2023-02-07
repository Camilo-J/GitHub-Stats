import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Input } from "../components/input";
import { getGitProfile } from "../services/gitapi-service";
import ProfileData from "./profile-data";
import { useAuth } from "../context/auth-context";

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

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite, onProfile }) {
  const [query, setQuery] = useState("");
  const { state, setState } = useAuth();

  const { status, data: profile, error } = state;

  useEffect(() => {
    //Get GitApi
    if (query === "") return;
    setState({ status: "pending", data: null, error: null });
    getGitProfile(query)
      .then((data) => {
        onProfile(data);
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({ status: "error", data: null, error: error.message });
      });
  }, [query, onProfile, setState]);

  console.log(profile);
  return (
    <Container>
      <Form>
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Form>

      {status === "pending" && "Retrieving user..."}

      {status === "success" && query !== "" && (
        <ProfileData
          profile={profile}
          favorites={favorites}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      )}

      {profile && query !== "" ? (
        ""
      ) : (
        <Img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="logo"
        />
      )}

      {query === "" && "No user..."}

      {status === "error" && query !== "" && (
        <p style={{ color: "red" }}>{error.message}</p>
      )}
    </Container>
  );
}

export default SearchPage;
