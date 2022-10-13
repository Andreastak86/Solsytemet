import { Box, EarthContainer, EarthH1, EarthImg, EarthP } from "./styles";
import EarthImage from "./img/earth.webp";
import { useEffect, useState } from "react";
import axios from "axios";

const Earth = () => {
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
          <EarthH1>Earth</EarthH1>
          <EarthP>
            One of the ancient names for our Earth is "{data.name}"
          </EarthP>
          <EarthP>
            Our Earth has an equatorial Radius of {data.equaRadius}km
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
export default Earth;
