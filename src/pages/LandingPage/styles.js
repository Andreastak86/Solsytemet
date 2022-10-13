import styled from "styled-components";
import Stars from "./img/stars.avif";

export const LPDiv = styled.div`
  background: url(${Stars});
  width: 100%;
  height: 100vh;
  z-index: -10;
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
  z-index: 1;
`;

export const MercuryContainer = styled.div`
  width: 20rem;
  height: 5rem;
  position: absolute;
  padding-left: 15rem;
  top: 2.5rem;
  left: -5rem;
  animation: mercury 3s linear infinite;
  @keyframes mercury {
    0% {
      transform: translate(0, 0);
      z-index: 2;
    }
    10% {
      transform: translate(-5rem, 1rem);
      z-index: 2;
    }
    20% {
      transform: translate(-10rem, 2rem);
      z-index: 2;
    }
    30% {
      transform: translate(-15rem, 1rem);
      z-index: 2;
    }
    40% {
      transform: translate(-15rem, 0rem);
      z-index: 2;
    }
    50% {
      transform: translate(-15rem, -1rem);
      z-index: 2;
    }
    60% {
      transform: translate(-13rem, -2rem);
      z-index: 0;
    }
    70% {
      transform: translate(-10rem, -3rem);
      z-index: 0;
    }
    80% {
      transform: translate(-2rem, -2rem);
      z-index: 0;
    }
    90% {
      transform: translate(2rem, -1rem);
      z-index: 1;
    }
    100% {
      transform: translate(0, 0);
      z-index: 1;
    }
  }
`;
