import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { t } from "i18next";
import {
  NavBar,
  NavBar2,
  NavMenuItems,
  NavMenuLink,
  NavMenuList,
  Planets,
  WebsiteName,
} from "./styles";
import SunPage from "../../../../pages/planetPages/sunPage/SunPage";
import EarthPage from "../../../../pages/planetPages/earthPage/EarthPage";
import MoonPage from "../../../../pages/planetPages/moonPage/MoonPage";
import MarsPage from "../../../../pages/planetPages/marsPage/MarsPage";
import JupiterPage from "../../../../pages/planetPages/jupiterPage/JupiterPage";
import SaturnPage from "../../../../pages/planetPages/saturnPage/SaturnPage";
import NeptunPage from "../../../../pages/planetPages/neptunePage/NeptunePage";
import VenusPage from "../../../../pages/planetPages/venusPage/VenusPage";
import Contact from "../../../contact";

import UranusPage from "../../../../pages/planetPages/uranusPage/UranusPage";
import PlutoPage from "../../../../pages/planetPages/plutoPage/plutoPage";
import MercuryPage from "../../../../pages/planetPages/merkurPage/MercuryPage";

import FrontPage from "../../../../pages/frontPage/FrontPage";

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
            <NavLink to="/">{t("Navbar.title")}</NavLink>
          </NavMenuLink>
        </WebsiteName>
        <NavMenuList>
          <NavMenuItems>
            <NavMenuLink>
              <NavLink to="/">{t("Navbar.mainPage")}</NavLink>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems>
            <NavMenuLink>
              <NavLink to="/sun">{t("Navbar.ourSun")}</NavLink>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems onClick={planetDropDown}>
            <NavMenuLink>
              <Planets>{t("Navbar.planets")}</Planets>
            </NavMenuLink>
          </NavMenuItems>
          <NavMenuItems>
            <NavMenuLink>
              <NavLink to="/contact">{t("Navbar.contact")}</NavLink>
            </NavMenuLink>
          </NavMenuItems>
        </NavMenuList>
      </NavBar>
      <NavBar2 active={active}>
        <NavMenuItems>
          <NavLink to="/mercury">Merkur</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/venus">Venus</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/earth">Earth</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/moon">Moon</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>
            <NavLink to="/mars">Mars</NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>
            <NavLink to="/jupiter">Jupiter</NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/saturn">Saturn</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/uranus">Uranus</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/neptun">Neptun</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/pluto">Pluto</NavLink>
        </NavMenuItems>
      </NavBar2>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/sun" element={<SunPage />} />
        <Route path="/earth" element={<EarthPage />} />
        <Route path="/moon" element={<MoonPage />} />
        <Route path="/mars" element={<MarsPage />} />
        <Route path="/jupiter" element={<JupiterPage />} />
        <Route path="/saturn" element={<SaturnPage />} />
        <Route path="/neptun" element={<NeptunPage />} />
        <Route path="/venus" element={<VenusPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uranus" element={<UranusPage />} />
        <Route path="/pluto" element={<PlutoPage />} />
        <Route path="/mercury" element={<MercuryPage />} />
      </Routes>
    </>
  );
}

export default Nav;
