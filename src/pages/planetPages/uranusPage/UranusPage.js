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

const UranusPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>{t("Uranus.title")}</StyledPageH1>
            <StyledPageP>{t("Uranus.firstText")}</StyledPageP>
            <StyledPageP>{t("Uranus.secondText")}</StyledPageP>
            <StyledPageP>{t("Uranus.thirdText")}</StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>{t("Uranus.factsTitle")}</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>{t("Uranus.factsRadius")}</StyledPageLi>
              <StyledPageLi>{t("Uranus.factsSize")}</StyledPageLi>
              <StyledPageLi>{t("Uranus.factsSpeed")}</StyledPageLi>
              <StyledPageLi>{t("Uranus.factsMoons")}</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>{t("Uranus.source")}</StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default UranusPage;
