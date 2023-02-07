import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { RiStarFill, RiCodeBoxFill, RiStarLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";
import { RiBookMarkFill } from "react-icons/ri";
import CardIcon from "../components/CardIcon";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ContainerCard = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 17px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 161px;
  height: 25px;
`;

const UserPic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50px;
`;

const UserName = styled.p`
  display: flex;
  min-width: 132px;
  gap: 0.5rem;
  ${typography.text.lg};
`;

const UserBio = styled.p`
  width: 132px;
  ${typography.text.md};
  text-align: center;
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default function ProfileData({
  profile,
  favorites,
  onAddFavorite,
  onRemoveFavorite,
}) {
  const regularContent = (
    <>
      <RiStarLine color={"#828282"} style={{ fontSize: "1.3rem" }} />
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} style={{ fontSize: "1.3rem" }} />
    </>
  );

  const isFavorite = Boolean(
    favorites?.find((fav) => fav.username === profile?.login)
  );

  return (
    <Container>
      <UserPic src={profile?.avatar_url} alt={"Git user"} />
      <NameContainer>
        <UserName>{profile?.name}</UserName>
        <FavoriteButton
          onClick={() =>
            isFavorite ? onRemoveFavorite(profile) : onAddFavorite(profile)
          }
        >
          {isFavorite ? favoriteContent : regularContent}
        </FavoriteButton>
      </NameContainer>
      <UserBio> {profile?.bio} </UserBio>

      <ContainerCard>
        <CardIcon
          icon={<FaUsers />}
          text={"followers"}
          amount={profile?.followers}
          url={`users/${profile?.login}/followers`}
          color={"#2D9CDB"}
        />
        <CardIcon
          icon={<RiUserHeartFill />}
          text={"followings"}
          amount={profile?.following}
          url={`users/${profile?.login}/followings`}
          color={"#F2994A"}
        />
        <CardIcon
          icon={<RiBookMarkFill />}
          text={"public repos"}
          amount={profile?.public_repos}
          url={`users/${profile?.login}/repos`}
          color={"#219653"}
        />
        <CardIcon
          icon={<RiCodeBoxFill />}
          text={"public gists"}
          amount={profile?.public_gists}
          url={"/"}
          color={"#828282"}
        />
      </ContainerCard>
    </Container>
  );
}
