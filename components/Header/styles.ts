import styled from "@emotion/styled";

const StyledNav = styled.nav`
  & {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 10px;
    max-width: 900px;
    margin: auto;
    background-color: transparent;
  }

  & div {
    flex-grow: 1;
    align-self: center;
    justify-self: flex-end;
  }
  & ul {
    flex-grow: 2;
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    align-self: flex-start;
    justify-content: flex-start;
  }

  & li {
    margin: 0 10px;
  }

  @media (max-width: 500px) {
    & {
      flex-flow: column wrap;
      width: 100%;
      max-width: 100vw;
      padding: 20px 0px;
    }

    & ul {
      flex-grow: 1;
      justify-content: center;
      padding: 0;
      align-self: center;
      font-size: 14px;
    }
  }
`;

export default StyledNav;
