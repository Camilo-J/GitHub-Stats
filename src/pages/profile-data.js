import styled from "@emotion/styled";
import { typography } from "../styles";
import { RiStarFill, RiCodeBoxFill } from "react-icons/ri";
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

const UserPic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50px;
`;

const UserName = styled.p`
  width: 132px;
  ${typography.text.lg};
`;

const UserBio = styled.p`
  width: 132px;
  ${typography.text.md};
  text-align: center;
`;

export default function ProfileData({ profile }) {
  return (
    <Container>
      <UserPic src={profile.avatar_url} alt={"Git user"} />
      <UserName> {profile?.name} </UserName>
      <UserBio> {profile?.bio} </UserBio>
      {/* Card for repos, following, followers, etc */}
      <ContainerCard>
        <CardIcon
          icon={<FaUsers />}
          text={"followers"}
          amount={profile.followers}
          url={`users/${profile?.login}/followers`}
          color={"#2D9CDB"}
        />
        <CardIcon
          icon={<RiUserHeartFill />}
          text={"followings"}
          amount={profile.following}
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
          amount={profile.public_gists}
          url={"/"}
          color={"#828282"}
        />
      </ContainerCard>
    </Container>
  );
}
