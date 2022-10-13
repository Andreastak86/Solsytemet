import React, { useState } from "react";
import { t } from "i18next";
import {
  NavBar,
  NavBar2,
  NavMenuItems,
  NavMenuLink,
  NavMenuList,
  NavMenuList2,
  WebsiteName,
} from "./styles";
import { Link } from "react-router-dom";

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
            <Link to="/Solsytemet">{t("Navbar.title")}</Link>
          </NavMenuLink>
        </WebsiteName>
        <NavMenuList>
          <NavMenuItems>
            <NavMenuLink>
              <Link to="/Solsytemet/sun">{t("Navbar.mainPage")}</Link>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems>
            <NavMenuLink>
              <Link>{t("Navbar.ourSolarsystem")}</Link>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems onClick={planetDropDown}>
            <NavMenuLink>{t("Navbar.planets")}</NavMenuLink>
          </NavMenuItems>
          <NavMenuItems>
            <NavMenuLink>{t("Navbar.contact")}</NavMenuLink>
          </NavMenuItems>
        </NavMenuList>
      </NavBar>
      <NavBar2 active={active}>
        <NavMenuItems>
          <NavMenuLink>
            <Link to="/Solsytemet/mars">Mars</Link>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>
            <Link to="/Solsytemet/jupiter">Jupiter</Link>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <Link to="/Solsytemet/saturn">Saturn</Link>
        </NavMenuItems>
        <NavMenuItems>
          <Link to="/Solsytemet/moon">Moon</Link>
        </NavMenuItems>
      </NavBar2>
    </>
  );
}

export default Nav;
