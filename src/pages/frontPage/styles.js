import styled from "styled-components";
import Stars from "./img/stars.avif";

export const LPDiv = styled.div`
  background: url(${Stars});
  width: 100%;
  height: 200vh;
  z-index: -1;
  overflow: hidden;
  @media (max-width: 1080) {
    height: 340vh;
  }
  @media (max-width: 720px) {
    height: 150vh;
  }
  @media (max-width: 720px) {
    height: 100vh;
  }
  @media (max-width: 425px) {
    height: 150vh;
  }
`;

export const SunImg = styled.img`
  width: 20rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 720px) {
    width: 15rem;
  }
  @media (max-width: 425px) {
    width: 7.5rem;
  }
`;

export const MercuryImg = styled.img`
  width: 2rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 720px) {
   width: 1rem;
  }
`;

export const VenusImg = styled.img`
  width: 4.5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
   width: 2.25rem;
  }
`;

export const EarthImg = styled.img`
  width: 5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
   width: 2.5rem;
  }
`;

export const MoonImg = styled.img`
  width: .8rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
    width: .4rem;
}
`

export const MarsImg = styled.img`
  width: 2.5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
    width: 1.25rem;
}
`;
export const JupiterImg = styled.img`
  width: 10rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 720px) {
    width: 6rem;
  }
  @media (max-width: 425px) {
    width: 3rem ;
  }
  
`;
export const SaturnImg = styled.img`
  width: 9rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 720px) {
    width: 6rem;
  }
  @media (max-width: 425px) {
    width: 3rem;
}
`;

export const UranusImg = styled.img`
  width: 7rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
    width: 3.5rem;
}
`;

export const NeptuneImg = styled.img`
  width: 6.5rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
    width: 3.25rem;
}
`;

export const PlutoImg = styled.img`
  width: 1rem;
  object-fit: contain;
  animation: spin 20s linear infinite;
  @media (max-width: 425px) {
    width: .5rem;
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
  position: absolute;
  z-index: 8;
  animation: spin 3479s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
   width: 18rem;
   height: 18rem;
  }
  @media (max-width: 720px) {
    width: 13rem;
    height: 13rem;
  }
  @media (max-width: 425px) {
    width: 8rem;
    height: 8rem;
  }
`;

export const VenusContainer = styled.div`
  width: 33rem;
  height: 33rem;
  position: absolute;
  z-index: 7;
  animation: spin 14579s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 26rem;
    height: 26rem;
  }
  @media (max-width: 720px) {
    width: 21rem;
    height: 21rem;
  }
  @media (max-width: 425px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const EarthContainer = styled.div`
  width: 42rem;
  height: 42rem;
  position: absolute;
  z-index: 6;
  animation: spin 59.4s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 35rem;
    height: 35rem;
  }
  @media (max-width: 720px) {
    width: 28rem;
    height: 28rem;
  }
  @media (max-width: 425px) {
    width: 17rem;
    height: 17rem;
  }
`;

export const MoonContainer = styled.div`
  margin-top: -1.5rem;
  margin-left: -1rem;
  width: 6.8rem;
  height: 6.5rem;
  position: absolute;
  animation: spin 1638s linear infinite;
  /* border: solid yellow 2px; */
  @media (max-width: 425px) {
    width: 4rem;
    height: 4rem;
  }
`

export const MarsContainer = styled.div`
  width: 49rem;
  height: 49rem;
  position: absolute;
  z-index: 5;
  animation: spin 61.8s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 42rem;
    height: 42rem;
  }
  @media (max-width: 720px) {
    width: 35rem;
    height: 35rem;
  }
  @media (max-width: 425px) {
    width: 21rem;
    height: 21rem;
  }
`;
export const JupiterContainer = styled.div`
  width: 67rem;
  height: 67rem;
  position: absolute;
  z-index: 4;
  animation: spin 24.6s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 60rem;
    height: 60rem;
  }
  @media (max-width: 720px) {
    width: 46rem;
    height: 46rem;
  }
  @media (max-width: 425px) {
    width: 26rem;
    height: 26rem;
  }
`;
export const SaturnContainer = styled.div`
  width: 80rem;
  height: 80rem;
  position: absolute;
  z-index: 3;
  animation: spin 27s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 73rem;
    height: 73rem;
  }
  @media (max-width: 720px) {
    width: 55rem ;
    height: 55rem;
  }
  @media (max-width: 425px) {
    width: 30rem;
    height: 30rem;
  }
`;
export const UranusContainer = styled.div`
  width: 90rem;
  height: 90rem;
  position: absolute;
  z-index: 2;
  animation: spin 43.2s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 80rem;
    height: 80rem;
  }
  @media (max-width: 720px) {
    width: 65rem;
    height: 65rem;
  }
  @media (max-width: 425px) {
    width: 35rem;
    height: 35rem;
  }
`;
export const NeptuneContainer = styled.div`
  width: 98rem;
  height: 98rem;
  overflow: hidden;

  position: absolute;
  animation: spin 40.2s linear infinite;
  /* border: solid red 2px; */
  z-index: 1;
  @media (max-width: 1024px) {
    width: 88rem;
    height: 88rem;
  }
  @media (max-width: 720px) {
    width: 75rem;
    height: 75rem;
  }
  @media (max-width: 425px) {
    width: 42rem;
    height: 42rem;
  }
`;
export const PlutoContainer = styled.div`
  width: 100rem;
  height: 100rem;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  animation: spin 383.4s linear infinite;
  /* border: solid red 2px; */
  @media (max-width: 1024px) {
    width: 90rem;
    height: 90rem;
  }

  @media (max-width: 720px) {
   width: 76rem;
   height: 76rem;
  }
  @media (max-width: 425px) {
    width: 45rem;
    height: 45rem;
  }
`;