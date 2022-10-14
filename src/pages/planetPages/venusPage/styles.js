import styled from "styled-components";
import venus from "./img/Venus.png";

export const StyledPageSection = styled.section`
  width: 100%;
  padding: 10em 0 0em;
  background-color: #000;
  background-image: url(${venus});
  background-repeat: no-repeat;
  background-position: 40% 40%;
  text-align: left;
  height: 100vh;
  line-height: 1.2;

  @media screen and (min-width: 600px) {
    line-height: 1.6;
  }
`;

export const StyledPageContainer = styled.div`
  width: 75%;
  margin: auto auto;
`;

export const StyledPageMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledPageInfoWrapper = styled.div`
  width: ${(props) => (props.info ? "100%" : props.facts && "100%")};

  @media screen and (min-width: 600px) {
    width: ${(props) => (props.info ? "50%" : props.facts && "30%")};
  }
`;

export const StyledPageFooter = styled.footer`
  margin-top: 45%;
  color: #fcf2dc;

  @media screen and (min-width: 600px) {
    margin-top: 12%;
  }
`;

export const StyledPageH1 = styled.h1`
  margin: 0;
  padding: 1em 0;
  font-size: 1.8rem;
  color: #fcf2dc;

  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledPageP = styled.p`
  margin: 0;
  padding: 0.5em 0;
  color: #fcf2dc;
  font-size: ${(props) => (props.footer ? "0.6rem" : "1rem")};
  filter: ${(props) =>
    props.footer ? "none" : "drop-shadow(1px 2px 1px black)"};

  @media screen and (min-width: 600px) {
    font-size: ${(props) => (props.footer ? "0.8rem" : "1.2rem")};
  }
`;

export const StyledPageUl = styled.ul`
  padding-left: 2em;
`;

export const StyledPageLi = styled.li`
  color: #fcf2dc;
  padding-bottom: 0.25em;

  @media screen and (min-width: 600px) {
    padding-bottom: 1em;
  }
`;
