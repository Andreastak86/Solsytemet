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
import { t } from "i18next";

const SaturnPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>{t("Saturn.title")}</StyledPageH1>
            <StyledPageP>{t("Saturn.firstText")}</StyledPageP>
            <StyledPageP>{t("Saturn.secondText")}</StyledPageP>
            <StyledPageP>{t("Saturn.thirdText")}</StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>{t("Saturn.factsTitle")}</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>{t("Saturn.factsYear")}</StyledPageLi>
              <StyledPageLi>{t("Saturn.factsMass")}</StyledPageLi>
              <StyledPageLi>{t("Saturn.factsRadius")}</StyledPageLi>
              <StyledPageLi>{t("Saturn.factsRings")}</StyledPageLi>
              <StyledPageLi>{t("Saturn.factsSpeed")}</StyledPageLi>
              <StyledPageLi>{t("Saturn.factsMoons")}</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>{t("Saturn.source")}</StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default SaturnPage;
