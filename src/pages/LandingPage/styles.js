import styled from "styled-components";
import Stars from "./img/stars.avif";

export const LPDiv = styled.div`
  background: url(${Stars});
  width: 100%;
  height: 100vh;
`;

export const LPH1 = styled.h1`
  text-align: center;
  padding-top: 20%;
  background: none;
`;

export const LPImg = styled.img`
  width: 100%;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const LPMid = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
`;

export const SunContainer = styled.div`
  width: 10rem;
  height: 10rem;
  position: absolute;
  z-index: 0;
`;

export const MercuryContainer = styled.div`
  width: 20rem;
  height: 5rem;
  position: absolute;
  padding-left: 15rem;
  top: 2.5rem;
  left: -5rem;
  animation: mercury 10s linear infinite;
  @keyframes mercury {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
