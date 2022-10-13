import { t } from "i18next";
import {
    SunBackground,
    SunEarthImage,
    SunHeader,
    SunImgTextFlex,
    SunText,
    SunTitle
} from "./styles";

function Sun() {
    return (
        <>
            <SunBackground>
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
                        {t("Sun.age")}
                    </SunText>
                </SunImgTextFlex>
            </SunBackground>
        </>
    )
}

export default Sun;