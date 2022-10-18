import { useEffect, useState } from "react";
import axios from "axios";
import { t } from "i18next";
import { Box, EarthContainer, EarthH1, EarthImg, EarthP } from "./styles";
import EarthImage from "./img/earth.webp";

const EarthPage = () => {
  const [apiError, setApiError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://api.le-systeme-solaire.net/rest/bodies/terre")
        .then((res) => {
          setData(res.data);
        })
        .catch((res) => {
          setApiError(res);
        });
    };
    getData();
  }, []);
  if (data) {
    return (
      <>
        <EarthContainer>
          <EarthImg src={EarthImage} alt="Earth" />
        </EarthContainer>
        <Box>
          <EarthH1>{t("Earth.title")}</EarthH1>
          <EarthP>
            {t("Earth.name")} "{data.name}"
          </EarthP>
          <EarthP>
            {t("Earth.radius")} {data.equaRadius}km
          </EarthP>
        </Box>
      </>
    );
  } else if (apiError) {
    return (
      <>
        <EarthContainer>
          <EarthImg src={EarthImage} alt="Earth" />
        </EarthContainer>
        <Box>
          <EarthH1>Earth</EarthH1>
          <EarthP>Failed to Load, please try again.</EarthP>
        </Box>
      </>
    );
  } else {
    <>
      <EarthContainer>
        <EarthImg src={EarthImage} alt="Earth" />
      </EarthContainer>
      <Box>
        <EarthH1>Earth</EarthH1>
        <EarthP>Failed to Load, please try again.</EarthP>
      </Box>
    </>;
  }
};
export default EarthPage;
