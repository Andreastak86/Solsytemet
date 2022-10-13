import styled from "styled-components";
import Mars from "./img/mars.jpg";

export const Seksjon = styled.section`
  background-image: url(${Mars});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%; /*or your image's width*/
  height: 100%; /*or your image's height*/
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
  color: #ffff;
  font-size: 32px;
`;

export const Flex = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 80px;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;
`;

export const Liste = styled.p`
  color: #ffff;
  font-size: 16px;
`;

export const Text = styled.p`
  color: #ffff;
  font-size: 20px;
  margin-top: 5rem;
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
