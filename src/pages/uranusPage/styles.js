import styled from "styled-components";
import uAnus from "./img/uranus.jpg";

export const Seksjon = styled.section`
  background-image: url(${uAnus});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%; /*or your image's width*/
  height: 100vh; /*or your image's height*/
  @media (max-width: 768px) {
    width: 86%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const Headder = styled.h1`
  color: #2dccc9;
  font-size: 64px;
`;

export const Bilde = styled.img`
  width: 50px;
  height: 50px;
`;

export const Paragraf = styled.p`
  color: #155e5d;
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
  color: #ad174b;
  font-size: 16px;
  margin: 50px 60px 30px 50px;
`;

export const Text = styled.p`
  color: #ad174b;
  font-size: 20px;
  margin: 100px 60px 30px 0px;
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
