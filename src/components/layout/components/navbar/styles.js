import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: black;
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

export const WebsiteName = styled.h1`
  font-size: 3rem;
  margin: auto 0;
  color: white;
`

export const NavMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: auto 0;
`

export const NavMenuItems = styled.li`
  list-style: none;
`

export const NavMenuLink = styled.a`
  color: white;
  text-decoration: none;
`