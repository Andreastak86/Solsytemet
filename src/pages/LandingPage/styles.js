import styled from "styled-components";
import Stars from "./img/stars.avif";

export const LPDiv = styled.div`
  background: url(${Stars});
  width: 100%;
  height: 100vh;
  z-index: -10;
  overflow: hidden;
`;

export const LPImg = styled.img`
  width: 5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const LPMid = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SunContainer = styled.div`
  position: absolute;
  z-index: 1;
`;

export const MercuryContainer = styled.div`
  width: 13rem;
  height: 13rem;
  /* border: solid red 5px; */
  animation: spin 20s linear infinite;
  position: absolute;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const VenusContainer = styled.div`
  width: 20rem;
  height: 20rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const EarthContainer = styled.div`
  width: 25rem;
  height: 25rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const MarsContainer = styled.div`
  width: 32rem;
  height: 32rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const JupiterContainer = styled.div`
  width: 40rem;
  height: 40rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const SaturnContainer = styled.div`
  width: 48rem;
  height: 48rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const UranusContainer = styled.div`
  width: 55rem;
  height: 55rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const NeptuneContainer = styled.div`
  width: 63em;
  height: 63rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const PlutoContainer = styled.div`
  width: 70rem;
  height: 70rem;
  /* border: solid red 5px; */
  position: absolute;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`