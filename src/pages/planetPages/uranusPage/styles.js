import styled from "styled-components";
import uAnus from "./img/uranus.jpg";

export const StyledPageSection = styled.section`
  width: 100%;
  padding: 11em 0;
  background-color: #000;
  background-image: url(${uAnus});
  background-repeat: no-repeat;
  background-position: 40% center;
  height: 100vh;
  line-height: 1.2;

  @media screen and (min-width: 1200px) {
    line-height: 1.6;
  }
`;

export const StyledPageContainer = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledPageMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledPageInfoWrapper = styled.div`
  width: ${(props) => (props.info ? "100%" : props.facts && "100%")};

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.info ? "60%" : props.facts && "30%")};
  }
`;

export const StyledPageFooter = styled.footer`
  color: #d5dcf5;
`;

export const StyledPageH1 = styled.h1`
  margin: 0;
  padding: 0.5em 0 0.25em;
  font-size: 1.6rem;
  color: #2dccc9;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`;

export const StyledPageP = styled.p`
  margin: 0;
  padding: 0.25em 0;
  color: #2dccc9;
  font-size: ${(props) => (props.footer ? "0.6rem" : "1rem")};
  filter: ${(props) =>
    props.footer ? "none" : "drop-shadow(1px 2px 1px black)"};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.footer ? "0.8rem" : "1.2rem")};
    padding: 0.5em 0;
  }
`;

export const StyledPageUl = styled.ul`
  padding-left: 2em;
`;

export const StyledPageLi = styled.li`
  color: #2dccc9;

  padding-bottom: 0.25em;

  @media screen and (min-width: 768px) {
    padding-bottom: 1em;
  }
`;

// export const Seksjon = styled.section`
//   background-image: url(${uAnus});
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%; /*or your image's width*/
//   height: 100vh; /*or your image's height*/
//   @media (max-width: 768px) {
//     width: 86%;
//   }
//   @media (max-width: 375px) {
//     width: 90%;
//   }
// `;

// export const Headder = styled.h1`
//   color: #2dccc9;
//   font-size: 64px;
// `;

// export const Bilde = styled.img`
//   width: 50px;
//   height: 50px;
// `;

// export const Paragraf = styled.p`
//   color: #155e5d;
//   font-size: 32px;
// `;

// export const Flex = styled.p`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   gap: 80px;
//   justify-content: space-around;
//   align-items: stretch;
//   align-content: space-around;
// `;

// export const Liste = styled.p`
//   color: #ad174b;
//   font-size: 16px;
//   margin: 50px 60px 30px 50px;
// `;

// export const Text = styled.p`
//   color: #ad174b;
//   font-size: 20px;
//   margin: 100px 60px 30px 0px;
// `;

// export const Kilde = styled.span`
//   color: white;
//   font-size: 16px;
// `;

// export const Button = styled.a`
//   padding-left: 5px;
//   background-color: transparent;
//   color: white;
// `;
