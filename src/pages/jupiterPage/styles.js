import styled from "styled-components";
import jupiter from "./img/pexels-zch-jupiter.jpg";

export const StyledPageSection = styled.section`
  width: 100%;
  padding: 1em 0 0;
  background-color: #000;
  background-image: url(${jupiter});
  background-repeat: no-repeat;
  background-position: center center;
  text-align: left;
  height: 95vh;
`;

export const StyledPageContainer = styled.div`
  width: 85%;
  margin: auto auto;
`;

export const StyledPageMainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledPageInfoWrapper = styled.div`
  width: ${(props) => (props.info ? "50%" : props.facts && "30%")};
`;

export const StyledPageFooter = styled.footer`
  margin: 12em 0 1em;
  color: #fff;
`;

export const StyledPageH1 = styled.h1`
  margin: 0;
  padding: 1em 0;
  font-size: 2rem;
  color: #fff;

  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledPageP = styled.p`
  margin: 0;
  padding: 0.5em 0;
  color: #fff;
`;

export const StyledPageUl = styled.ul``;

export const StyledPageLi = styled.li`
  color: #fff;
  padding-bottom: 0.25em;
`;
