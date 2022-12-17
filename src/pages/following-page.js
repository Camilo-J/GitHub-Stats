import styled from "@emotion/styled";
import { typography } from "../styles"
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainTitle = styled.h1`
  display: flex;

  margin-bottom: 96px;

  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-style: normal;
  font-weight: 400;
`

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// const FollowerHeader = styled.header`
//   position: absolute;
//   width: 303px;
//   height: 35px;
//   left: 32px;
//   top: 16px;
// `;
const FollowersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;


const FollowersCard = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: 300px;
  height: 56px;
  ${typography.text.md};
  background: #FFFFFF;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const PokeImage = styled.img`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

function FollowingPage({ followings }) {

  console.log(followings)
  console.log("followings", followings)

  return (
    <Wrapper>
      <MainTitle>Followings ({followings.length})</MainTitle>

      {followings.map((following, index) => (
        <FollowersContainer>
          <FollowersCard value={following.login} key={following.id}>
            <PokeImage
              src="https://s3-alpha-sig.figma.com/img/5215/dacf/3b688b2a3dd2a02199de17ea0d7b5c09?Expires=1672012800&Signature=owRR5x8O9uqQQ1lQW3Ip4weQEhZfnrgUDiB6KoSAnCvLSxdDh8G6VbQzgKsj0IL9-tH8ADoo7AaUI2vOtbgtUo137po0DDuNzeai4ymqHMxuLEvhANS60nXzdg6tF6DBV6rs6kkuao28IT4pr3PVzqH-Lxz82mMb~zDhKrc2BbxEk2NSHKQdF7WzcfB9rxpQv1vMxLydJtq2GE8oegF1E5KE0pCD2efZ9DilvgUlNZcoQjECdlRqoHTf1txf~k9RIqNPxjy3gYVOBvkgYIyA0ofRPAOe4a49fly1~frXT84MX3r~18UUQYA~1vpK2UFRj-4iAilOQoNoSzI4mMoqTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="icono"
            />
            {following.login}
          </FollowersCard>
        </FollowersContainer>
      ))}
      <Link to="/">Go back </Link>
    </Wrapper>
  );
}
// function FavoritePage({ userInfo }) {
//   let { user } = useParams();
//   console.log(user)

//   return (
//     <Wrapper>
//       {userInfo.followers.map((userFollowed, index) => (
//         <FollowersCard value={userFollowed.login} key={`git${index}`}>
//           {userFollowed.login}
//         </FollowersCard>
//       ))}
//       <Link to="/:user">Go back </Link>
//     </Wrapper>
//   );
// }

export default FollowingPage;