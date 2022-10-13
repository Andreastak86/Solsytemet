import React from "react";
import { t } from "i18next";
import {
  NavBar,
  NavMenuItems,
  NavMenuLink,
  NavMenuList,
  WebsiteName
} from "./styles";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <NavBar>
      <WebsiteName>
        <NavMenuLink
        >
          <Link to='/Solsytemet'>

            {t("Navbar.title")}
          </Link>
        </NavMenuLink>
      </WebsiteName>
      <NavMenuList>
        <NavMenuItems>
          <NavMenuLink
          >
            <Link to='/Solsytemet'>
              {t("Navbar.mainPage")}
            </Link>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
          >
            <Link>
              {t("Navbar.ourSolarsystem")}
            </Link>
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