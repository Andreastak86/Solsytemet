import styled from "styled-components";
import TheSun from "./img/the_sun.jpg"
import SunAndEarth from "./img/earth-and-the-sun.jpg"

export const SunBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding-top: 0.1rem;
`

export const SunHeader = styled.div`
  margin-top: 7rem;
  margin-bottom: 2rem;
  height: 50rem;
  width: 100%;
  background: url(${TheSun});
  background-position: center;
`

export const SunTitle = styled.h1`
  font-size: 10rem;
  color: white;
  background: none;
  display: flex;
  justify-content: center;
  padding-top: 20rem;
`

export const SunText = styled.p`
  margin: 0 auto;
  text-align: center;
  color: white;
  width: 30%;
  @media (max-width: 1080px) {
    width: 70%;
  }
`

export const SunImgTextFlex = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  padding-bottom: 10rem;
  @media (max-width: 1080px) {
    width: 90%;
  }
`

export const SunEarthImage = styled.div`
  width: 100%;
  background: url(${SunAndEarth});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 680px) {
    width: 30%;
  }
`