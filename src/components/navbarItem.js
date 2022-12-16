import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  ${typography.text.md};
  color: ${colors.gray[600]};
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  font-size: 2.5rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    svg {
      fill: #828282;
    }
  }
  &:focus {
    outline: 1px solid #828282;
    svg {
      fill: #828282;
    }
  }
  &:visited {
  }
`;

function NavBarItem({ name, icon, to }) {
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          background: colors.gray[400],
          color: "#BDBDBD",
          "&:visited": {
            svg: {
              fill: "#fffff",
            },
          },
        };
      }}
    >
      {icon}
      {name}
    </StyledNavLink>
  );
}

export default NavBarItem;
