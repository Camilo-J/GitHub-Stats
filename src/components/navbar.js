import styled from "@emotion/styled";
import { RiUserFill, RiSearchFill, RiStarFill } from "react-icons/ri";
import NavBarItem from "./navbarItem";

const NavbarC = styled("div")`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #828282;
`;

function Navbar() {
  const optionIcon = {
    profile: <RiUserFill />,
    search: <RiSearchFill />,
    favorite: <RiStarFill />,
  };
  return (
    <NavbarC>
      <NavBarItem to={"profile"} icon={optionIcon.profile} />
      <NavBarItem to={"/"} icon={optionIcon.search} />
      <NavBarItem to={"favorites"} icon={optionIcon.favorite} />
    </NavbarC>
  );
}

export default Navbar;