import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`;

export const WebsiteName = styled.h1`
  font-size: 3rem;
  margin: auto 0;
  color: white;
`;

export const NavMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: auto 0;
`;

export const NavBar2 = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  height: ${(props) => (props.active ? "4rem" : 0)};
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  max-height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 7rem;
  left: 0;
  width: 100vw;
  transition: 0.3s;
  overflow: hidden;
  z-index: 10;
`;

export const NavMenuItems = styled.li`
  list-style: none;
`;

export const NavMenuLink = styled.a`
  color: white;
  text-decoration: none;
`;
