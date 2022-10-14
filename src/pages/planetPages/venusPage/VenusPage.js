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

const VenusPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>{t("Venus.title")}</StyledPageH1>
            <StyledPageP>{t("Venus.firstText")}</StyledPageP>
            <StyledPageP>{t("Venus.secondText")}</StyledPageP>
            <StyledPageP>{t("Venus.thirdText")}</StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>{t("Venus.factsTitle")}</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>{t("Venus.factsRadius")}</StyledPageLi>
              <StyledPageLi>{t("Venus.factsSize")}</StyledPageLi>
              <StyledPageLi>{t("Venus.factsSpeed")}</StyledPageLi>
              <StyledPageLi>{t("Venus.factsMoons")}</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>{t("Venus.source")}</StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default VenusPage;
