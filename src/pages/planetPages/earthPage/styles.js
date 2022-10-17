import styled from "styled-components";
import Stars from "./../../LandingPage/img/stars.avif";

export const EarthContainer = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  border: 0;
  background: url(${Stars});
  z-index: -1;
`;

export const EarthImg = styled.img`
  height: 100%;
  width: 200%;
  object-fit: contain;
  animation: spin 120s infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 425px) {
    width: 300%;
  }
`;

export const EarthH1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
  -webkit-text-stroke: 2px black;
  @media (max-width: 425px) {
    font-size: 3rem;
  }
`;

export const EarthP = styled.p`
  font-size: 2rem;
  text-align: left;
  margin-left: 5rem;
  margin-right: 50rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    margin-right: 10rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
`;

export const Box = styled.div`
  width: 100%;
  margin: 15rem 0;
  @media (max-width: 768px) {
    margin-bottom: 10rem;
  }
`;
