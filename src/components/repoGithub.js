import styled from "@emotion/styled";
import Icon from "./Icon";
import { VscRepoForked } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

const ContainRepo = styled("div")`
  max-width: 350px;
  padding: 8px 12px;
  border: 1px solid black;
`;
const Icons = styled("div")`
  display: flex;
  gap: 1rem;
`;

// BsCircleFill;

const Repo = ({ fork = 0, stars = 0, language = 0, description, name }) => {
  return (
    <ContainRepo>
      <p>{name}</p>
      <p>{description}</p>
      <Icons>
        <Icon icon={<BsCircleFill />} text={language} />
        <Icon icon={<AiOutlineStar />} text={stars} />
        <Icon icon={<VscRepoForked />} text={fork} />
      </Icons>
    </ContainRepo>
  );
};

export default Repo;
