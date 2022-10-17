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
              <StyledPageLi>{t("Pluto.factsDiscovery")}</StyledPageLi>
              <StyledPageLi>{t("Pluto.factsMass")}</StyledPageLi>
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

// import {
//   Seksjon,
//   Headder,
//   Paragraf,
//   Flex,
//   Text,
//   Liste,
//   Kilde,
//   Button,
// } from "./styles";

// const PlutoPage = () => {
//   return (
//     <Seksjon>
//       <div className='container pluto__container'>
//         <article>
//           <Headder>Pluto</Headder>

//           <Paragraf>
//             <Flex>
//               <Text>
//                 <p>
//                   Pluto er en dvergplanet i solsystemet. Pluto ble tidligere
//                   regnet som den niende og ytterste av planetene i solsystemet,
//                   men har siden 2006 blitt regnet som en dvergplanet. Plutos
//                   diameter er cirka 2370 kilometer, om lag en sjettedel av
//                   Jordens diameter og mindre enn Månen. Pluto er meget lyssvak
//                   med en tilsynelatende størrelsesklasse på 14,7 i
//                   gjennomsnittlig avstand fra Jorden. Den er ikke mulig å se
//                   uten bruk av teleskop av en viss størrelse.
//                   Overflatetemperaturen er –235 °C.
//                   <br />
//                   Pluto har fem måner som alle beveger seg i Plutos ekvatorplan.
//                   Den største, Charon, ble oppdaget i 1978. Den har samme
//                   rotasjonstid som Pluto, og de to vender derfor alltid samme
//                   side mot hverandre. Charon har en diameter halvparten så stor
//                   som Plutos.
//                 </p>
//               </Text>
//               <p>
//                 <Liste>
//                   <h4>Fakta om Pluto</h4>
//                   <ul>
//                     <li>Minste avstand fra Solen 4443 millioner kilometer</li>
//                     <li>Største avstand fra Solen 7380 millioner kilometer</li>
//                     <li>Banens ekliptikkhelning 17,1 grader</li>
//                     <li>Radius 1185 kilometer</li>
//                     <li>Masse (Jorden = 1) 0,0022</li>
//                     <li>
//                       Gjennomsnittlig tetthet 1,9 gram per kubikkcentimeter
//                     </li>
//                     <li>Siderisk omløpstid 248,02 år</li>
//                     <li>Måner 5</li>
//                   </ul>
//                 </Liste>
//               </p>
//             </Flex>

//             <Kilde>
//               Aksnes, Kaare; Hammerstrøm, Maria: Mars i Store norske leksikon på
//               snl.no. Hentet 11. oktober 2022 fra
//               <Button href='https://snl.no/Mars'>SNL</Button>
//             </Kilde>
//           </Paragraf>
//         </article>
//       </div>
//     </Seksjon>
//   );
// };

// export default PlutoPage;
