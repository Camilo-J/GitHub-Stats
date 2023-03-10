import styled from "@emotion/styled";
import Icon from "./Icon";
import { VscRepoForked } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { languageColors } from "../styles/colors";

const ContainRepo = styled("a")`
  min-width: 330px;
  max-width: 330px;
  padding: 8px 12px;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  color: black;
`;
const Icons = styled("div")`
  display: flex;
  gap: 1rem;
`;

const Title = styled("p")`
  color: #2d9cdb;
  font-size: 1rem;
  font-weight: 700;
  line-height: 20.11px;
`;

const Description = styled("p")`
  font-size: 13px;
  font-weight: 400;
  line-height: 15.08px;
`;

// BsCircleFill;

const Repo = ({
  fork = 0,
  stars = 0,
  language = 0,
  description,
  name,
  url,
}) => {
  // <Link to={{pathname:`${link}`}} tagert="_blank">View</Link>

  return (
    <ContainRepo href={`${url}`} target="_blank">
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Icons>
        <Icon
          icon={<BsCircleFill style={{ color: languageColors[language] }} />}
          text={language}
        />
        <Icon icon={<AiOutlineStar />} text={stars} />
        <Icon icon={<VscRepoForked />} text={fork} />
      </Icons>
    </ContainRepo>
  );
};

export default Repo;
