import React from "react";
import { t } from "i18next";
import {
  NavBar,
  NavMenuItems,
  NavMenuLink,
  NavMenuList,
  WebsiteName,
} from "./styles";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <NavBar>
      <WebsiteName>

        <NavMenuLink>
          <NavLink to="/Solsytemet">{t("Navbar.title")}</NavLink>
        </NavMenuLink>
      </WebsiteName>
      <NavMenuList>
        <NavMenuItems>

          <NavMenuLink>
            <NavLink to="/Solsytemet/sun">{t("Navbar.mainPage")}</NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>

            <NavLink>{t("Navbar.ourSolarsystem")}</NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink href="#">{t("Navbar.planets")}</NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink href="#">{t("Navbar.contact")}</NavMenuLink>
        </NavMenuItems>
      </NavMenuList>
    </NavBar>
  );
}

export default Nav;
