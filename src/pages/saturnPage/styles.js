import styled from "styled-components";
import saturn from "./img/saturn.png";

export const StyledPageSection = styled.section`
  width: 100%;
  padding: 2em 0 0;
  background-color: #000;
  background-image: url(${saturn});
  background-repeat: no-repeat;
  background-position: 40% center;
  text-align: left;
  height: 100vh;
  line-height: 1.6;
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
  color: orange;
`;

export const StyledPageH1 = styled.h1`
  margin: 0;
  padding: 1em 0;
  font-size: 2rem;
  color: orange;

  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledPageP = styled.p`
  margin: 0;
  padding: 0.5em 0;
  color: orange;
`;

export const StyledPageUl = styled.ul`
  padding-left: 2em;
`;

export const StyledPageLi = styled.li`
  color: orange;
  padding-bottom: 0.5em;
`;
