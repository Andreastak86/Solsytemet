import styled from "styled-components";
import Stars from "./img/stars.avif";

export const LPDiv = styled.div`
  background: url(${Stars});
  width: 100%;
  height: 150vh;
  z-index: -1;
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
  z-index: 9;
`;

export const MercuryContainer = styled.div`
  width: 13rem;
  height: 13rem;
  animation: spin 3479s linear infinite;
  position: absolute;
  z-index: 8;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const VenusContainer = styled.div`
  width: 20rem;
  height: 20rem;
  position: absolute;
  animation: spin 14579s linear infinite;
  z-index: 7;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const EarthContainer = styled.div`
  width: 25rem;
  height: 25rem;
  position: absolute;
  animation: spin 59.4s linear infinite;
  z-index: 6;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const MarsContainer = styled.div`
  width: 32rem;
  height: 32rem;
  position: absolute;
  animation: spin 61.8s linear infinite;
  z-index: 5;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const JupiterContainer = styled.div`
  width: 40rem;
  height: 40rem;
  position: absolute;
  animation: spin 24.6s linear infinite;
  z-index: 4;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const SaturnContainer = styled.div`
  width: 48rem;
  height: 48rem;
  position: absolute;
  animation: spin 27s linear infinite;
  z-index: 3;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const UranusContainer = styled.div`
  width: 55rem;
  height: 55rem;
  position: absolute;
  animation: spin 43.2s linear infinite;
  z-index: 2;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const NeptuneContainer = styled.div`
  width: 63em;
  height: 63rem;
  position: absolute;
  animation: spin 40.2s linear infinite;
  z-index: 1;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const PlutoContainer = styled.div`
  width: 70rem;
  height: 70rem;
  position: absolute;
  animation: spin 383.4s linear infinite;
  z-index: 0;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  z-index: 10;
  position: fixed;
  top: 20rem;
  left: 20rem;
  height: 400px;
  width: 400px;
  display: ${(props) => (props.active ? "flex" : "none")};
`;

export const Button = styled.button`
  height: 5rem;
  width: 10rem;
  margin: auto;
  background: rgba(100, 200, 200, 0.3);
  border-radius: 5rem;
  border: 1px solid white;
  transition: 1s;
  :hover {
    background-color: rgba(100, 200, 200, 1);
  }
`;
