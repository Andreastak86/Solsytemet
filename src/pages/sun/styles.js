import styled from "styled-components";
import TheSun from "./img/the_sun.jpg"


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
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  color: white;
  width: 30%;
`