import styled from "styled-components";
import uAnus from "./img/uranus.jpg";

export const Seksjon = styled.section`
  background-image: url(${uAnus});
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
  color: #0038ff;
  font-size: 16px;
  margin: 50px;
`;

export const Text = styled.p`
  color: #0038ff;
  font-size: 20px;
  margin: 5rem 1rem 5rem 4rem;
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
