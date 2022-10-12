import styled from "styled-components";
import jupiter from "./img/jupiter.png";

export const StyledPageSection = styled.section`
  width: 100%;
  padding: 6em 0 0em;
  background-color: #000;
  background-image: url(${jupiter});
  background-repeat: no-repeat;
  background-position: 40% center;
  text-align: left;
  height: 100vh;
  line-height: 1.2;

  @media screen and (min-width: 600px) {
    line-height: 1.6;
  }
`;

export const StyledPageContainer = styled.div`
  width: 85%;
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
    width: ${(props) => (props.info ? "50%" : props.facts && "32%")};
  }
`;

export const StyledPageFooter = styled.footer`
  margin-top: 45%;
  color: #fff;

  @media screen and (min-width: 600px) {
    margin-top: 22%;
  }
`;

export const StyledPageH1 = styled.h1`
  margin: 0;
  padding: 1em 0;
  font-size: 1.8rem;
  color: #fff;

  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledPageP = styled.p`
  margin: 0;
  padding: 0.5em 0;
  color: #fff;
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
  color: #fff;
  padding-bottom: 0.25em;

  @media screen and (min-width: 600px) {
    padding-bottom: 1em;
  }
`;
