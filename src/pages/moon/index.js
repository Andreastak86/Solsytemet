import { Box, MoonContainer, MoonH1, MoonImg, MoonP } from "./styles";
import { t } from "i18next";

const Moon = () => {
  return (
    <>
      <Box>
        <MoonContainer />
        <MoonH1>{t("Moon.title")}</MoonH1>
        <MoonP>{t("Moon.para1")}</MoonP>
        <MoonP>{t("Moon.para2")}</MoonP>
        <MoonP>{t("Moon.para3")}</MoonP>
        <MoonP>{t("Moon.para4")}</MoonP>
        <MoonP>{t("Moon.para5")}</MoonP>
      </Box>
    </>
  );
};

export default Moon;
