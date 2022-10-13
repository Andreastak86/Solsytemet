import styled from "styled-components";
import TheSun from "./img/the_sun.jpg"
import SunAndEarth from "./img/earth-and-the-sun.jpg"


export const SunHeader = styled.div`
  margin-top: 7rem;
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
  margin: 5rem auto;
  text-align: center;
  color: white;
  width: 30%;
`

export const SunImgTextFlex = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

export const SunEarthImage = styled.div`
  width: 100%;
  background: url(${SunAndEarth});
  background-size: contain;
  background-repeat: no-repeat;
`