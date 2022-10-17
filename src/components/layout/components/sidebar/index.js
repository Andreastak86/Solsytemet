import { NavLink } from "react-router-dom";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMainMenu,
  SidebarPlanetMenu,
  SidebarWrapper,
  NavMenuLink,
} from "./styles";
import { t } from "i18next";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMainMenu>
          <NavMenuLink>
            <NavLink to="/" onClick={toggle}>
              {t("Navbar.mainPage")}
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/sun" onClick={toggle}>
              {t("Navbar.ourSun")}
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/contact" onClick={toggle}>
              {t("Navbar.contact")}
            </NavLink>
          </NavMenuLink>
        </SidebarMainMenu>

        <SidebarPlanetMenu>
          <NavMenuLink>
            <NavLink to="/mercury" onClick={toggle}>
              Merkur
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/venus" onClick={toggle}>
              Venus
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/earth" onClick={toggle}>
              Earth
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/moon" onClick={toggle}>
              Moon
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/mars" onClick={toggle}>
              Mars
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/jupiter" onClick={toggle}>
              Jupiter
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/saturn" onClick={toggle}>
              Saturn
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/uranus" onClick={toggle}>
              Uranus
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/neptun" onClick={toggle}>
              Neptun
            </NavLink>
          </NavMenuLink>
          <NavMenuLink>
            <NavLink to="/pluto" onClick={toggle}>
              Pluto
            </NavLink>
          </NavMenuLink>
        </SidebarPlanetMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
