import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: solid rgba(255, 255, 255, 0.5) 2px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 7rem;
  color: rgb(159, 159, 159);
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`;

export const FooterFlow = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none outside none;
  text-align: center;
  justify-content: center;
`;

export const FooterList = styled.li`
  margin: 0 1rem;
  color: #fff;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
`;
