// import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LPDiv,
  // LPImg,
  LPMid,
  SunContainer,
  MercuryContainer,
  VenusContainer,
  EarthContainer,
  MarsContainer,
  JupiterContainer,
  SaturnContainer,
  UranusContainer,
  NeptuneContainer,
  PlutoContainer,
  SunImg,
  MercuryImg,
  VenusImg,
  EarthImg,
  MarsImg,
  JupiterImg,
  SaturnImg,
  UranusImg,
  NeptuneImg,
  PlutoImg,
  // Modal,
  // Button,
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

const LandingPage = () => {
  // const [active, setActive] = useState(false);

  // const toggle = () => {
  //   setActive(!active);
  // };

  return (
    <>
      <LPDiv>
        <LPMid>
          <SunContainer>
            <Link
              to="/sun"
            >
              <SunImg
                // onClick={toggle} 
                id="1"
                src={Sun}
                alt="the sun"
              />
            </Link>
          </SunContainer>
          <MercuryContainer>
            <Link
              to="/mercury"
            >
              <MercuryImg
                src={Mercury}
                alt="Mercury"
              />
            </Link>
          </MercuryContainer>
          <VenusContainer>
            <Link
              to="/venus"
            >
              <VenusImg
                src={Venus}
                alt="Venus"
              />
            </Link>
          </VenusContainer>
          <EarthContainer>
            <Link to="/earth">
              <EarthImg
                src={Earth}
                alt="Earth"
              />
            </Link>
          </EarthContainer>
          <MarsContainer>
            <Link
              to="/mars"
            >
              <MarsImg
                src={Mars}
                alt="Mars"
              />
            </Link>
          </MarsContainer>
          <JupiterContainer>
            <Link
              to="/jupiter"
            >
              <JupiterImg
                src={Jupiter}
                alt="Jupiter"
              />
            </Link>
          </JupiterContainer>
          <SaturnContainer>
            <Link
              to="/saturn"
            >
              <SaturnImg
                src={Saturn}
                alt="Saturn"
              />
            </Link>

          </SaturnContainer>
          <UranusContainer>
            <Link
              to="/uranus"
            >

              <UranusImg
                src={Uranus}
                alt="Uranus"
              />
            </Link>
          </UranusContainer>
          <NeptuneContainer>
            <Link
              to="/neptune"
            >
              <NeptuneImg
                src={Neptune}
                alt="Neptune"
              />
            </Link>
          </NeptuneContainer>
          <PlutoContainer>
            <Link
              to="pluto"
            >
              <PlutoImg
                src={Pluto}
                alt="Pluto"
              />
            </Link>
          </PlutoContainer>
        </LPMid>
        {/* <Modal active={active}>
          <SunImg 
            src={Sun} 
            alt="The Sun" 
          />
          <Button>
            <Link 
              to="/sun"
            >
              Om Solen
            </Link>
          </Button>
        </Modal> */}
      </LPDiv>
    </>
  );
};

export default LandingPage;
