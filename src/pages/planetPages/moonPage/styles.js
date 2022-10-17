import styled from "styled-components";
import MoonImage from "./img/earthFromMoon.jpg";

export const Box = styled.div`
  margin: 15rem 7rem;
  @media (max-width: 768px) {
    margin: 0;
    background: rgba(0, 0, 0, 0.4);
    padding: 11rem 3rem;
  }
`;

export const MoonH1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke: 2px black;
  @media (max-width: 425px) {
    font-size: 3rem;
  }
`;

export const MoonP = styled.p`
  font-size: 2rem;
  text-align: left;
  padding-right: 20%;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;

export const MoonContainer = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  background: url(${MoonImage}) no-repeat;
  background-size: cover;
  z-index: -1;
  @media (max-width: 425px) {
    background-position: bottom;
  }
`;

export const MoonImg = styled.img`
  height: 600%;
  width: 200%;
  object-fit: contain;
`;
