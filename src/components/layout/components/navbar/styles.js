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
  font-size: 2rem;
  margin: auto 0;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Planets = styled.p`
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const NavMenuList = styled.ul`
  display: ${(props) => props.active && "none"};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin: auto 0;
  }
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
  @media screen and (min-width: 768px) {
    list-style: none;
  }
`;

export const NavMenuLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const StyledMobileIcon = styled.div`
  position: relative;
  top: -20px;
  right: -30px;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;
