import styled from "styled-components";
import Stars from "./img/stars.avif";

export const LPDiv = styled.div`
  background: url(${Stars});
  width: 100%;
  height: 200vh;
  z-index: -1;
  overflow: hidden;
`;

export const SunImg = styled.img`
  width: 30rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`;

export const MercuryImg = styled.img`
  width: 2rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  /* position: fixed;
  top: 0;
  right: 0; */
`;

export const VenusImg = styled.img`
  width: 4.5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`;

export const EarthImg = styled.img`
  width: 5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`;

export const MoonImg = styled.img`
  width: .8rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`

export const MarsImg = styled.img`
  width: 2.5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  /* position: fixed;
  bottom: 0;
  left: 0; */
`;
export const JupiterImg = styled.img`
  width: 10rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  /* position: absolute;
  bottom: 0;
  right: 0; */
`;
export const SaturnImg = styled.img`
  width: 9rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`;
export const UranusImg = styled.img`
  width: 7rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`;

export const NeptuneImg = styled.img`
  width: 6.5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
`;

export const PlutoImg = styled.img`
  width: 1rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
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
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const MercuryContainer = styled.div`
  width: 25rem;
  height: 25rem;
  /* animation: spin 3479s linear infinite; */
  position: absolute;
  z-index: 8;
  border: solid red 2px;
`;

export const VenusContainer = styled.div`
  width: 33rem;
  height: 33rem;
  position: absolute;
  /* animation: spin 14579s linear infinite; */
  z-index: 7;
  border: solid red 2px;
`;

export const EarthContainer = styled.div`
  width: 42rem;
  height: 42rem;
  position: absolute;
  /* animation: spin 59.4s linear infinite; */
  z-index: 6;
  border: solid red 2px;
`;

export const MoonContainer = styled.div`
margin-top: -1.5rem;
margin-left: -1rem;
  width: 6.8rem;
  height: 6.5rem;
  position: absolute;
  border: solid yellow 2px;
  /* animation: spin 1638s linear infinite; */
`

export const MarsContainer = styled.div`
  width: 49rem;
  height: 49rem;
  position: absolute;
  /* animation: spin 61.8s linear infinite; */
  z-index: 5;
  border: solid red 2px;
`;
export const JupiterContainer = styled.div`
  width: 67rem;
  height: 67rem;
  position: absolute;
  /* animation: spin 24.6s linear infinite; */
  z-index: 4;
  border: solid red 2px;
`;
export const SaturnContainer = styled.div`
  width: 80rem;
  height: 80rem;
  position: absolute;
  /* animation: spin 27s linear infinite; */
  z-index: 3;
  border: solid red 2px;
`;
export const UranusContainer = styled.div`
  width: 90rem;
  height: 90rem;
  position: absolute;
  /* animation: spin 43.2s linear infinite; */
  z-index: 2;
  border: solid red 2px;
`;
export const NeptuneContainer = styled.div`
  width: 98rem;
  height: 98rem;
  position: absolute;
  /* animation: spin 40.2s linear infinite; */
  z-index: 1;
  border: solid red 2px;
`;
export const PlutoContainer = styled.div`
  width: 100rem;
  height: 100rem;
  position: absolute;
  /* animation: spin 383.4s linear infinite; */
  z-index: 0;
  border: solid red 2px;
`;

// export const Modal = styled.div`
//   background-color: rgba(0, 0, 0, 0.6);
//   border: 2px solid white;
//   z-index: 10;
//   position: fixed;
//   top: 30%;
//   left: 40%;
//   height: 400px;
//   width: 400px;
//   transition: 1s;
//   transform: scale(${(props) => (props.active ? "100%" : "0%")});
// `;

// export const Button = styled.button`
//   height: 5rem;
//   width: 10rem;
//   margin: auto;
//   background: rgba(100, 200, 200, 0.3);
//   border-radius: 5rem;
//   border: 1px solid white;
//   transition: 1s;
//   :hover {
//     background-color: rgba(100, 200, 200, 1);
//   }
// `;
