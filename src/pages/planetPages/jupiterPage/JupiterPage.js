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

const JupiterPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>
              {t("Jupiter.title")}
            </StyledPageH1>
            <StyledPageP>
              {t("Jupiter.firstText")}
            </StyledPageP>
            <StyledPageP>
              {t("Jupiter.secondText")}
            </StyledPageP>
            <StyledPageP>
              {t("Jupiter.thirdText")}
            </StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>
              {t("Jupiter.factsTitle")}

            </StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>
                {t("Jupiter.factsSize")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Jupiter.factsSpeed")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Jupiter.factsMass")}
              </StyledPageLi>
              <StyledPageLi>
                {t("Jupiter.factsEquatorRadius")}
              </StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>

        <StyledPageFooter>
          <StyledPageP footer>
            {t("Jupiter.source")}
          </StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default JupiterPage;
