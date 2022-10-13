import {
  Button,
  EarthContainer,
  JupiterContainer,
  LPDiv,
  LPImg,
  LPMid,
  MarsContainer,
  MercuryContainer,
  Modal,
  NeptuneContainer,
  PlutoContainer,
  SaturnContainer,
  SunContainer,
  UranusContainer,
  VenusContainer,
} from "./styles";
import Sun from "./img/sun.webp";
import Mercury from "./img/mercury.webp";
import Venus from "./img/Venus.png";
import Earth from "./img/earth.png";
import Mars from "./img/mars.png";
import Jupiter from "./img/jupiter.webp";
import Saturn from "./img/saturn.png";
import Uranus from "./img/uranus.png";
import Neptune from "./img/neptune.webp";
import Pluto from "./img/pluto.webp";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const LandingPage = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const closeMenu = (e) => {
    if (menu.current && active && !menu.current.contains(e.target)) {
      setActive(false);
    }
  };

  const menu = useRef(null);
  document.addEventListener("mousedown", closeMenu);

  return (
    <>
      <LPDiv ref={menu}>
        <LPMid>
          <SunContainer>
            <LPImg onClick={toggle} id="1" src={Sun} alt="the sun" />
          </SunContainer>
          <MercuryContainer>
            <LPImg src={Mercury} alt="Mercury" />
          </MercuryContainer>
          <VenusContainer>
            <LPImg src={Venus} alt="Venus" />
          </VenusContainer>
          <EarthContainer>
            <Link to="/earth">
              <LPImg src={Earth} alt="Earth" />
            </Link>
          </EarthContainer>
          <MarsContainer>
            <LPImg src={Mars} alt="Mars" />
          </MarsContainer>
          <JupiterContainer>
            <LPImg src={Jupiter} alt="Jupiter" />
          </JupiterContainer>
          <SaturnContainer>
            <LPImg src={Saturn} alt="Saturn" />
          </SaturnContainer>
          <UranusContainer>
            <LPImg src={Uranus} alt="Uranus" />
          </UranusContainer>
          <NeptuneContainer>
            <LPImg src={Neptune} alt="Neptune" />
          </NeptuneContainer>
          <PlutoContainer>
            <LPImg src={Pluto} alt="Pluto" />
          </PlutoContainer>
        </LPMid>
        <Modal id="1" active={active}>
          <LPImg src={Sun} alt="The Sun" />
          <Button>
            <Link to="/sun">Om Solen</Link>
          </Button>
        </Modal>
      </LPDiv>
    </>
  );
};

export default LandingPage;
