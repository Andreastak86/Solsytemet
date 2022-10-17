import { t } from "i18next";
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

const NeptunPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>
              {t("Neptun.title")}
            </StyledPageH1>
            <StyledPageP>
              {t("Neptun.firstText")}
            </StyledPageP>
            <StyledPageP>
              {t("Neptun.secondText")}
            </StyledPageP>
            <StyledPageP>
              {t("Neptun.thirdText")}
            </StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>
              {t("Neptun.factsTitle")}
            </StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>
                {t("Neptun.factsDiscovery")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Neptun.factsMass")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Neptun.factsSpeed")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Neptun.factsMoons")}
              </StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          
          <StyledPageP footer>
            {t("Neptun.source")}
          </StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default NeptunPage;
