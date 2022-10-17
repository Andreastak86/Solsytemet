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

const MercuryPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>{t("Mercury.title")}</StyledPageH1>
            <StyledPageP>{t("Mercury.firstText")}</StyledPageP>
            <StyledPageP>{t("Mercury.secondText")}</StyledPageP>
            <StyledPageP>{t("Mercury.thirdText")}</StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>{t("Mercury.factsTitle")}</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>{t("Mercury.factsRadius")}</StyledPageLi>
              <StyledPageLi>{t("Mercury.factsSize")}</StyledPageLi>
              <StyledPageLi>{t("Mercury.factsSpeed")}</StyledPageLi>
              <StyledPageLi>{t("Mercury.factsMoons")}</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>{t("Mercury.source")}</StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default MercuryPage;
