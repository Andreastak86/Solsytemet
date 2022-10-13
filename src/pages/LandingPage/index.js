import {
  LPDiv,
  LPH1,
  LPImg,
  LPMid,
  MercuryContainer,
  SunContainer,
} from "./styles";
import Sun from "./img/sun.webp";
import Mercury from "./img/mercury.webp";

const LandingPage = () => {
  return (
    <>
      <LPDiv>
        <LPMid>
          <SunContainer>
            <LPImg src={Sun} alt='the sun'></LPImg>
          </SunContainer>
          <MercuryContainer>
            <LPImg src={Mercury} alt='Mercury'></LPImg>
          </MercuryContainer>
        </LPMid>
      </LPDiv>
    </>
  );
};

export default LandingPage;
