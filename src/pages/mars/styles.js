import styled from "styled-components";
import img from "./img/mars.jpg";

export const Seksjon = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  width: auto; /*or your image's width*/
  height: auto; /*or your image's height*/
  @media (max-width: 768px) {
    width: 86%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const Mars__container = styled.div`
  color: orange;
`;

export const Headder = styled.h1`
  color: #ffb800;
  font-size: 64px;
`;

export const Bilde = styled.img`
  width: 50px;
  height: 50px;
`;

export const Paragraf = styled.p`
  color: #ffb800;
  font-size: 32px;
`;

export const Kilde = styled.span`
  color: white;
  font-size: 16px;
`;

export const Button = styled.a`
  padding-left: 5px;
  background-color: transparent;
  color: white;
`;
