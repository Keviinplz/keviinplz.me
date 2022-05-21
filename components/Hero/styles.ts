import styled from "@emotion/styled";

const StyledHeroBox = styled.div`
  max-width: 80vw;
  min-height: 80vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const StyledHeroTitle = styled.div`
  width: 100%;
  align-self: center;

  h1 {
    color: #232320;
    font-size: 4.5em;
    letter-spacing: -1.5px;
    margin: 0;
    font-weight: 100;
  }

  p {
    color: #53534d;
    font-size: 1.1em;
    max-width: 500px;
    font-weight: 100;
    line-height: 150%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5em;
      text-align: center;
    }

    p {
      font-size: 1em;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;

const StyledHeroImage = styled.div`
  width: 100%;
  text-align: center;

  & img {
    border-radius: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
      
    & img {
      width: 200px !important;
      height: 200px !important;
    }
  }
`;

export { StyledHeroBox, StyledHeroTitle, StyledHeroImage };
