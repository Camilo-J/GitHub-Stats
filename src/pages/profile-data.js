export default function ProfileData({ profile }) {

  return (
    <div>
      <h1> {profile?.name} </h1>
      <img src={profile.avatar_url} alt={"Git user"} />
      <p>followers: {profile.followers}</p>
      <p>followings: {profile.following}</p>
      <p>public repos: {profile.public_repos}</p>
      <p>public gists: {profile.public_gists}</p>
    </div>
  )
}