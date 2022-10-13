import {
  EarthContainer,
  JupiterContainer,
  LPDiv,
  LPImg,
  LPMid,
  MarsContainer,
  MercuryContainer,
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
import Earth from "./img/earth.png"
import Mars from "./img/mars.png"
import Jupiter from "./img/jupiter.webp"
import Saturn from "./img/saturn.png"
import Uranus from "./img/uranus.png"
import Neptune from "./img/neptune.webp"
import Pluto from "./img/pluto.webp"


const LandingPage = () => {
  return (
    <>
      <LPDiv>
        <LPMid>
          <SunContainer>
            <LPImg 
              src={Sun} 
              alt="the sun" 
            />
          </SunContainer>
          <MercuryContainer>
            <LPImg 
              src={Mercury} 
              alt="Mercury" 
            />
          </MercuryContainer>
          <VenusContainer>
            <LPImg
              src={Venus}
              alt="Venus"
            />
          </VenusContainer>
          <EarthContainer>
            <LPImg
              src={Earth}
              alt="Earth"
            />
          </EarthContainer>
          <MarsContainer>
            <LPImg
              src={Mars}
              alt="Mars"
            />
          </MarsContainer>
          <JupiterContainer>
          <LPImg
              src={Jupiter}
              alt="Jupiter"
            />
          </JupiterContainer>
          <SaturnContainer>
          <LPImg
              src={Saturn}
              alt="Saturn"
            />
          </SaturnContainer>
          <UranusContainer>
          <LPImg
              src={Uranus}
              alt="Uranus"
            />
          </UranusContainer>
          <NeptuneContainer>
          <LPImg
              src={Neptune}
              alt="Neptune"
            />
          </NeptuneContainer>
          <PlutoContainer>
          <LPImg
              src={Pluto}
              alt="Pluto"
            />
          </PlutoContainer>
        </LPMid>
      </LPDiv>
    </>
  );
};

export default LandingPage;
