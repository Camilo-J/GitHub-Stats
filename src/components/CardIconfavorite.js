import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContainerCard = styled("div")`
  background: #ffffff;
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 400;
  border-radius: 4px;
  width: 300px;
  height: 56px;
  padding: 18px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #000000;
  svg {
    width: 50px;
    height: 50px;
    fill: ${({ color }) => color};
  }
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const Amount = styled("p")`
  font.weight: 400;
  font-size: 28px;
  line-height: 35.2px;
`;

const Text = styled("p")`
  font-weight: 400;
  font-size: 16px;
  line-height: 20.11px;
`;

const CardIconFavorite = ({ username, name, avatar, icon }) => {
  return (
    <ContainerCard>
      <img style={{width:"40px", borderRadius:"50%"}} src={`${avatar}`}></img>
      <div style={{height:"35px", width:"185.13px", padding:"0px"}}><h3 style={{fontSize:"16px"}}>{name}</h3>
      <p style={{fontSize:"12px"}}>{username}</p>
      </div>
      {icon}
    </ContainerCard>
  );
};

export default CardIconFavorite;
