import { Link } from "react-router-dom";
import * as Styled from "./styles";
// import Sun from "./img/sun.webp";
// import Mercury from "./img/mercury.webp";
// import Venus from "./img/Venus.png";
// import Earth from "./img/earth.png";
// import Moon from "./img/moon.png";
// import Mars from "./img/mars.png";
// import Jupiter from "./img/jupiter.webp";
// import Saturn from "./img/saturn.png";
// import Uranus from "./img/uranus.png";
// import Neptune from "./img/neptune.webp";
// import Pluto from "./img/pluto.webp";
import * as StyledImg from "./img/PlanetImg";

const FrontPage = () => {
  return (
    <>
      <Styled.LPDiv>
        <Styled.LPMid>
          <Styled.SunContainer>
            <Link to="/sun">
              <Styled.SunImg src={StyledImg.Sun} alt="the sun" />
            </Link>
          </Styled.SunContainer>
          <Styled.MercuryContainer>
            <Link to="/mercury">
              <Styled.MercuryImg src={StyledImg.Mercury} alt="Mercury" />
            </Link>
          </Styled.MercuryContainer>
          <Styled.VenusContainer>
            <Link to="/venus">
              <Styled.VenusImg src={StyledImg.Venus} alt="Venus" />
            </Link>
          </Styled.VenusContainer>
          <Styled.EarthContainer>
            <Styled.MoonContainer>
              <Link to="/moon">
                <Styled.MoonImg src={StyledImg.Moon} alt="Moon" />
              </Link>
            </Styled.MoonContainer>
            <Link to="/earth">
              <Styled.EarthImg src={StyledImg.Earth} alt="Earth" />
            </Link>
          </Styled.EarthContainer>
          <Styled.MarsContainer>
            <Link to="/mars">
              <Styled.MarsImg src={StyledImg.Mars} alt="Mars" />
            </Link>
          </Styled.MarsContainer>
          <Styled.JupiterContainer>
            <Link to="/jupiter">
              <Styled.JupiterImg src={StyledImg.Jupiter} alt="Jupiter" />
            </Link>
          </Styled.JupiterContainer>
          <Styled.SaturnContainer>
            <Link to="/saturn">
              <Styled.SaturnImg src={StyledImg.Saturn} alt="Saturn" />
            </Link>
          </Styled.SaturnContainer>
          <Styled.UranusContainer>
            <Link to="/uranus">
              <Styled.UranusImg src={StyledImg.Uranus} alt="Uranus" />
            </Link>
          </Styled.UranusContainer>
          <Styled.NeptuneContainer>
            <Link to="/neptune">
              <Styled.NeptuneImg src={StyledImg.Neptune} alt="Neptune" />
            </Link>
          </Styled.NeptuneContainer>
          <Styled.PlutoContainer>
            <Link to="pluto">
              <Styled.PlutoImg src={StyledImg.Pluto} alt="Pluto" />
            </Link>
          </Styled.PlutoContainer>
        </Styled.LPMid>
      </Styled.LPDiv>
    </>
  );
};

export default FrontPage;
