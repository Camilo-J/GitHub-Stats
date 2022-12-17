import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import FollowersPage from "../pages/followers-page";
import { useState } from "react";
import { getGitProfileFollowers } from "../services/gitapi-service"

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

const StyledButton = styled.button`
  display: flex;
  width: 167px;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${colors.blue[500]};
  border-radius: 0.5rem;
  color: ${colors.white};
  border: none;
  ${typography.text.md}
  line-height: 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray[300]};
  }
`;

const PokeImage = styled("img")`
  max-width: 150px;
`;

function formatId(id) {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}

<<<<<<< HEAD:src/components/user-data.js
export default function userData({
=======
export default function PokemonData({
>>>>>>> b9f7e47 (WIP: add a provissional profile page, including a button which render the Folllowers Page without any style):src/components/pokemon-data.js
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
  console.log("user en poke-data:", user);

  const [showFollowers, setShowFollowers] = useState(true);
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: followers, error } = state;

  console.log("followers:", followers);
  function handleFollowers(event) {
    event.preventDefault();
    setShowFollowers(!showFollowers);

    let realuser = user.login
    console.log("username en poke-data:", user.login)
    getGitProfileFollowers(realuser)
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
    <div>
<<<<<<< HEAD:src/components/user-data.js
<<<<<<< HEAD:src/components/user-data.js
      <h2>{user.name}</h2>
      {/* <p>{formatId(pokemon.id)}</p> */}
      <p>#{user.id.toString().padStart(3, "0")}</p>
      <PokeImage
        src={user.sprites.other["official-artwork"].front_default}
        alt={user.name}
      />

      {user.types.map((element) => (
=======
=======
      {showFollowers ?
        (
          <div>
            <h2>{user.name}</h2>
            <PokeImage
              src={user.avatar_url}
              alt={user.name}
            />
            <StyledButton
              onClick={handleFollowers}
            >Followers: {user.followers}</StyledButton>
>>>>>>> 8a4c9e8 (WIP: Add styles for the cards of each follower, add provitional logic to search page and user data to just render the views we want):src/components/pokemon-data.js

            <p>Following: {user.following}</p>

<<<<<<< HEAD:src/components/user-data.js
      {/* {pokemon.types.map((element) => (
>>>>>>> b9f7e47 (WIP: add a provissional profile page, including a button which render the Folllowers Page without any style):src/components/pokemon-data.js
        <p key={element.slot}>{element.type.name}</p>
      ))} */}
      {/* <Link to="/favorites">Followers: {user.followers}</Link> */}
      <StyledButton
        onClick={handleFollowers}
      >Followers: {user.followers}</StyledButton>

<<<<<<< HEAD:src/components/user-data.js
      <p>followers: {user.followers / 65} k</p>
      <p>followings: {user.followings / 171} </p>
      <p>public repos: {user.publicRepos / 249}</p>
      <p>public gists: {user.publicGists / 72}</p>
=======
      <p>Following: {user.following}</p>
>>>>>>> b9f7e47 (WIP: add a provissional profile page, including a button which render the Folllowers Page without any style):src/components/pokemon-data.js

      <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(user) : onAddFavorite(user)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
=======
            <FavoriteButton
              onClick={() =>
                isFavorite ? onRemoveFavorite(user) : onAddFavorite(user)
              }
            >
              {isFavorite ? favoriteContent : regularContent}
            </FavoriteButton>
          </div>
        )
        : status === "success" && (<FollowersPage followers={followers} />
        )}
>>>>>>> 8a4c9e8 (WIP: Add styles for the cards of each follower, add provitional logic to search page and user data to just render the views we want):src/components/pokemon-data.js
    </div>
  );
}
