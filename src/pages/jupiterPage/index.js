import {
  StyledPageContainer,
  StyledPageFooter,
  StyledPageH1,
  StyledPageInfoWrapper,
  StyledPageLi,
  StyledPageMainWrapper,
  StyledPageP,
  StyledPageSection,
  StyledPageUl,
} from "./styles";

export const Jupiter = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>Jupiter</StyledPageH1>
            <StyledPageP>
              Jupiter er den femte planeten fra solen og den største planeten i
              solsystemet. Jupiter, i tillegg til Saturn, Uranus og Neptun er
              gasskjemper.
            </StyledPageP>
            <StyledPageP>
              Planeten var i oldtiden forbundet med mytologi og religiøse
              oppfatninger i en rekke kulturer. Romerne oppkalte planeten etter
              den romerske guden Jupiter.
            </StyledPageP>
            <StyledPageP>
              Jupiter består hovedsakelig av hydrogen. Den raske rotasjonen gir
              Jupiter form som en flattrykt sfæroide, med en liten bul rundt
              ekvator. Den ytre atmosfæren er segregert i flere striper på
              forskjellige høyder, som fører til turbulens og stormer langs de
              vekselvirkende grensene.
            </StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>Fakta om Jupiter</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>Største planeten i solsystemet</StyledPageLi>
              <StyledPageLi>Gjennomsnittsfart: 13,07 km/s</StyledPageLi>
              <StyledPageLi>
                Masse: 2,5 ganger massen til alle andre planeter i solsystemet
                til sammen
              </StyledPageLi>
              <StyledPageLi>Ekvatorradius: 71 492 km</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>

        <StyledPageFooter>
          <StyledPageP footer>
            Hentet: 11. oktober 2022 fra https://no.wikipedia.org/wiki/Jupiter
          </StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};
