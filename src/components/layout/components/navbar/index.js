import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
import {
  NavBar,
  NavBar2,
  NavMenuItems,
  NavMenuLink,
  NavMenuList,
  // NavMenuList2,
  WebsiteName,
} from "./styles";

function Nav() {
  const [active, setActive] = useState();
  const planetDropDown = (id) => {
    setActive(!active);
  };

  return (
    <>
      <NavBar>
        <WebsiteName>
          <NavMenuLink>
            <NavLink 
              to="/"
            >
              {t("Navbar.title")}
            </NavLink>
          </NavMenuLink>
        </WebsiteName>
        <NavMenuList>
          <NavMenuItems>
            <NavMenuLink>
              <NavLink 
                to="/"
              >
                {t("Navbar.mainPage")}
              </NavLink>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems>
            <NavMenuLink>
              <NavLink 
                to="/sun"
              >
                {t("Navbar.ourSun")}
              </NavLink>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems 
            onClick={planetDropDown}
          >
            <NavMenuLink>
              <NavLink 
                to="/"
              >
                {t("Navbar.planets")}
              </NavLink>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems>
            <NavMenuLink>
              <NavLink 
                to="#"
              >
                {t("Navbar.contact")}
              </NavLink>
            </NavMenuLink>
          </NavMenuItems>
        </NavMenuList>
      </NavBar>
      <NavBar2 
        active={active}
      >
        <NavMenuItems>
          <NavMenuLink>
            <NavLink 
              to="/mars"
            >
              Mars
            </NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>
            <NavLink 
              to="/jupiter"
            >
              Jupiter
            </NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink 
            to="/saturn"
          >
            Saturn
          </NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink 
            to="/venus"
          >
            Venus
          </NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink 
            to="/neptun"
          >
            Neptun
          </NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink 
            to="/moon"
          >
            Moon
          </NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink 
            to="/earth"
          >
            Earth
          </NavLink>
        </NavMenuItems>
      </NavBar2>
    </>
  );
}

export default Nav;
