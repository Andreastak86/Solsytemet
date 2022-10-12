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

export const Saturn = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>Saturn</StyledPageH1>
            <StyledPageP>
              Saturn er den sjette planeten fra solen og den nest største i
              solsystemet, etter Jupiter. Den er oppkalt etter den romerske
              guden Saturn.
            </StyledPageP>
            <StyledPageP>
              Saturns lag med metallisk hydrogen leder elektrisk strøm, og antas
              å gi opphav til planetens magnetfelt, som ved overflaten er noe
              svakere enn jordens. Vindhastighetene kan komme opp i 1 800 km/t.
            </StyledPageP>
            <StyledPageP>
              Saturns ringsystem består av ni sammenhengende hovedringer og tre
              usammenhengende buer, som består hovedsakelig av ispartikler, med
              også en del stein og støv. 82 kjente måner går i bane rundt
              planeten - 53 av disse har fått offisielle navn. I tillegg
              befinner det seg hundrevis av «dvergmåner» i ringsystemet.
            </StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>Fakta Om Saturn</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>1 Saturn-år = 30 år på jorden</StyledPageLi>
              <StyledPageLi>Masse: 95 ganger jordens</StyledPageLi>
              <StyledPageLi>Gjennomsnittsradius: 9 ganger jordens</StyledPageLi>
              <StyledPageLi>Hovedringer: 9</StyledPageLi>
              <StyledPageLi>Gjennomsnittsfart: 9,69 km/s</StyledPageLi>
              <StyledPageLi>Måner: 82</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>
            Hentet: 11. oktober 2022 fra https://no.wikipedia.org/wiki/Saturn
          </StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};
