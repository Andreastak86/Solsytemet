import { Link } from "react-router-dom";
import * as Styled from "./styles";
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
