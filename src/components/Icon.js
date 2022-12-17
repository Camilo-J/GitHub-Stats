import styled from "@emotion/styled";

const ContainIcon = styled("div")`
  display: flex;
  gap: 4.2px;
`;

const Icon = ({ icon, text }) => {
  return (
    <ContainIcon>
      {icon}

      <p>{text}</p>
    </ContainIcon>
  );
};

export default Icon;
