import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Repo from "../components/repoGithub";
import { getRepos } from "../services/gitapi-service";

const TitleRepo = styled("p")`
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`;

const RepoPage = ({ profile }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos(profile.repos_url)
      .then((data) => {
        setRepos(data);
      })
      .catch(console.log);
  }, [profile]);

  return (
    <div>
      <TitleRepo>Public Repos ({repos.length})</TitleRepo>
      {repos.map((repo, index) => {
        return (
          <Repo
            key={index}
            description={repo.description || "Description"}
            fork={repo.forks_count}
            language={repo.language}
            name={repo.name}
            stars={repo.stargazers_count}
          ></Repo>
        );
      })}
    </div>
  );
};

export default RepoPage;
