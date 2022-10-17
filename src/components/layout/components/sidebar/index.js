import { NavLink } from "react-router-dom";
import { NavMenuLink, Planets } from "../navbar/styles";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMainMenu,
  SidebarPlanetMenu,
  SidebarWrapper,
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
            <NavLink to="/" onClick={toggle}>
              <Planets>{t("Navbar.planets")}</Planets>
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
            <NavLink to="/neptun" onClick={toggle}>
              Neptun
            </NavLink>
          </NavMenuLink>
        </SidebarPlanetMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
