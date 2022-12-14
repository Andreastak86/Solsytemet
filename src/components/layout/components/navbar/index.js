import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { t } from "i18next";
import {
  NavBar,
  NavBar2,
  NavMenuItems,
  NavMenuLink,
  NavMenuList,
  Planets,
  WebsiteName,
  StyledMobileIcon,
} from "./styles";
import SunPage from "../../../../pages/planetPages/sunPage/SunPage";
import EarthPage from "../../../../pages/planetPages/earthPage/EarthPage";
import MoonPage from "../../../../pages/planetPages/moonPage/MoonPage";
import MarsPage from "../../../../pages/planetPages/marsPage/MarsPage";
import JupiterPage from "../../../../pages/planetPages/jupiterPage/JupiterPage";
import SaturnPage from "../../../../pages/planetPages/saturnPage/SaturnPage";
import NeptunPage from "../../../../pages/planetPages/neptunePage/NeptunePage";
import VenusPage from "../../../../pages/planetPages/venusPage/VenusPage";

import UranusPage from "../../../../pages/planetPages/uranusPage/UranusPage";
import PlutoPage from "../../../../pages/planetPages/plutoPage/plutoPage";
import MercuryPage from "../../../../pages/planetPages/merkurPage/MercuryPage";

import ContactPage from "../../../../components/contact/ContactPage";

import FrontPage from "../../../../pages/frontPage/FrontPage";

function Nav({ toggle }) {
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
        <NavMenuList active>
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

        <StyledMobileIcon onClick={toggle}>
          <FaBars />
        </StyledMobileIcon>
      </NavBar>
      <NavBar2 active={active}>
        <NavMenuItems>
          <NavLink to="/mercury">{t("Planets.mercury")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/venus">{t("Planets.venus")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/earth">{t("Planets.earth")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/moon">{t("Planets.moon")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>
            <NavLink to="/mars">{t("Planets.mars")}</NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavMenuLink>
            <NavLink to="/jupiter">{t("Planets.jupiter")}</NavLink>
          </NavMenuLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/saturn">{t("Planets.saturn")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/uranus">{t("Planets.uranus")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/neptune">{t("Planets.neptune")}</NavLink>
        </NavMenuItems>
        <NavMenuItems>
          <NavLink to="/pluto">{t("Planets.pluto")}</NavLink>
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
        <Route path="/neptune" element={<NeptunPage />} />
        <Route path="/venus" element={<VenusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/uranus" element={<UranusPage />} />
        <Route path="/pluto" element={<PlutoPage />} />
        <Route path="/mercury" element={<MercuryPage />} />
      </Routes>
    </>
  );
}

export default Nav;
