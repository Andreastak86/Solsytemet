import React from "react";
import { NavBar, NavMenuItems, NavMenuLink, NavMenuList, WebsiteName } from "./styles";
import "./test.css"

function Nav() {
  return (
    <NavBar>
      <WebsiteName>
        <NavMenuLink
          href="#"
        >
          Solsytemet
        </NavMenuLink>
      </WebsiteName>
      <NavMenuList>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            Forsiden
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            Vårt solsystem
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            Planeter
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink
            href="#"
          >
            Kontakt oss
          </NavMenuLink>
        </NavMenuItems>
      </NavMenuList>
    </NavBar>
  )
}

export default Nav;