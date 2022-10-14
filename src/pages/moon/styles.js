import styled from "styled-components";
import Stars from "../LandingPage/img/stars.avif";
import MoonImage from "./img/earthFromMoon.jpg";

export const Box = styled.div`
  margin: 10rem 7rem;
`;

export const MoonH1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke: 2px black;
`;

export const MoonP = styled.p`
  font-size: 2rem;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
  text-align: left;
  padding-right: 20%;
  margin-bottom: 2rem;
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
`;

export const MoonImg = styled.img`
  height: 600%;
  width: 200%;
  object-fit: contain;
`;
