import { t } from "i18next";
import { 
    SunEarthImage,
    SunHeader, 
    SunImgTextFlex, 
    SunText, 
    SunTitle 
} from "./styles";

function Sun() {
    return (
        <>
            <SunHeader>
                <SunTitle>
                    {t("Sun.title")}
                </SunTitle>
            </SunHeader>
            <SunText>
                {t("Sun.titleSubtext")}
            </SunText>
            <SunImgTextFlex>
                <SunEarthImage />
                <SunText>
                The Sun doesn't have a "year," per se. But the Sun orbits the center of the Milky Way about every 230 million Earth years, bringing the planets, asteroids, comets, and other objects with it.
                    {/* {t("")} */}
                </SunText>
            </SunImgTextFlex>
        </>
    )
}

export default Sun;