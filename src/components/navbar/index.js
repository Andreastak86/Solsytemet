import React from "react";
import { t } from "i18next";
import { 
  NavBar, 
  NavMenuItems, 
  NavMenuLink, 
  NavMenuList, 
  WebsiteName 
} from "./styles";

function Nav() {
  return (
    <NavBar>
      <WebsiteName>
        <NavMenuLink
          href="#"
        >
          {t("Navbar.title")}
        </NavMenuLink>
      </WebsiteName>
      <NavMenuList>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            {t("Navbar.mainPage")}
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            {t("Navbar.ourSolarsystem")}
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            {t("Navbar.planets")}
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            {t("Navbar.contact")}
          </NavMenuLink>
        </NavMenuItems>
      </NavMenuList>
    </NavBar>
  )
}

export default Nav;