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

const MarsPage = () => {

  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>
              {t("Mars.title")}
            </StyledPageH1>
            <StyledPageP>
              {t("Mars.firstText")}
            </StyledPageP>
            <StyledPageP>
              {t("Mars.secondText")}
            </StyledPageP>
            <StyledPageP>
              {t("Mars.thirdText")}
            </StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>
              {t("Mars.factsTitle")}
            </StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>
                {t("Mars.factsDiscovery")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Mars.factsMass")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Mars.factsSpeed")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Mars.factsMoons")}
              </StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>
            {t("Mars.source")}
          </StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};


export default MarsPage;

