import styled from "styled-components";
import Mars from "./img/mars.jpg";

export const StyledPageSection = styled.section`
  width: 100%;
  padding: 11em 0 80em;
  background-color: #000;
  background-image: url(${Mars});
  background-repeat: no-repeat;
  background-position: 40% center;
  height: 100vh;
  line-height: 1.2;

  @media screen and (min-width: 500px) {
    padding: 11em 0;
  }

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
  filter: drop-shadow(1px 2px 1px black);

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.info ? "60%" : props.facts && "30%")};
  }
`;

export const StyledPageFooter = styled.footer`
  color: #d5dcf5;
  margin-top: 2em;
  filter: drop-shadow(1px 2px 1px black);

  @media screen and (min-width: 500px) {
    margin-top: 0;
  }
`;

export const StyledPageH1 = styled.h1`
  margin: 0;
  padding: 0.5em 0 0.25em;
  font-size: 1.6rem;
  color: #f06d0a;
  text-shadow: 2px 2px 1px black;

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
  color: #f56f07;
  font-size: ${(props) => (props.footer ? "0.6rem" : "1rem")};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.footer ? "0.8rem" : "1.2rem")};
    padding: 0.5em 0;
  }
`;

export const StyledPageUl = styled.ul`
  padding-left: 2em;
`;

export const StyledPageLi = styled.li`
  color: #fa7207;
  text-shadow: 2px 2px 1px black;

  padding-bottom: 0.25em;

  @media screen and (min-width: 768px) {
    padding-bottom: 1em;
  }
`;
