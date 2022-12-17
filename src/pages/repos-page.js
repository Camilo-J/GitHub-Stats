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

const ContainerRepos = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContainerPage = styled("div")`
  padding: 1rem 0;
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
    <ContainerPage>
      <TitleRepo>Public Repos ({repos.length})</TitleRepo>

      <ContainerRepos>
        {repos.map((repo, index) => {
          return (
            <Repo
              key={index}
              description={repo.description || "Description"}
              fork={repo.forks_count}
              language={repo.language || "none"}
              name={repo.name}
              stars={repo.stargazers_count}
              url={repo.html_url}
            ></Repo>
          );
        })}
      </ContainerRepos>
    </ContainerPage>
  );
};

export default RepoPage;
