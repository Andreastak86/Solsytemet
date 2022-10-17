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

const PlutoPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>{t("Pluto.title")}</StyledPageH1>
            <StyledPageP>{t("Pluto.firstText")}</StyledPageP>
            <StyledPageP>{t("Pluto.secondText")}</StyledPageP>
            <StyledPageP>{t("Pluto.thirdText")}</StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>{t("Pluto.factsTitle")}</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>{t("Pluto.factsRadius")}</StyledPageLi>
              <StyledPageLi>{t("Pluto.factsSize")}</StyledPageLi>
              <StyledPageLi>{t("Pluto.factsSpeed")}</StyledPageLi>
              <StyledPageLi>{t("Pluto.factsMoons")}</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>{t("Pluto.source")}</StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default PlutoPage;
