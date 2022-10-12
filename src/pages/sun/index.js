import { t } from "i18next";
import { SunHeader, SunText, SunTitle } from "./styles";

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
        </>
    )
}

export default Sun;