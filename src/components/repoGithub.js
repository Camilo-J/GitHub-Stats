import styled from "@emotion/styled";

const ContainIcon = styled("div")`
  display: flex;
  gap: 4.2px;
`;

const Repo = () => {
  return (
    <div>
      <p>titulo</p>
      <p>descripcion</p>
      <div>
        <ContainIcon>
          <p>icon</p>

          <p>titulo</p>
        </ContainIcon>
      </div>
    </div>
  );
};

export default Repo;
