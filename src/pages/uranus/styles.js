import styled from "styled-components";
import Uranus from "./img/uranus.jpg";

export const Seksjon = styled.section`
  background-image: url(${Uranus});

  @media (max-width: 768px) {
    width: 86%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const uranus__container = styled.div`
  color: #0038ff;
`;

export const Headder = styled.h1`
  color: #0038ff;
  font-size: 64px;
`;

export const Bilde = styled.img`
  width: 50px;
  height: 50px;
`;

export const Paragraf = styled.p`
  color: #0038ff;
  font-size: 32px;
`;

export const Kilde = styled.span`
  color: #ffffff;
  font-size: 16px;
`;

export const Button = styled.a`
  padding-left: 5px;
  background-color: transparent;
  color: white;
`;
