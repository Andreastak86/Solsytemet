import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  border: solid black 2px;
  background-color: black;
  height: 7rem;
  color: rgb(159, 159, 159);;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const FooterFlow = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  list-style: none outside none;
  text-align: center;

`

export const FooterList = styled.li`
  margin: 0 1rem;
  color: #FFF;
`

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
`