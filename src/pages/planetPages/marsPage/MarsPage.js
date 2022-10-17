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

const MarsPage = () => {
  return (
    <StyledPageSection>
      <StyledPageContainer>
        <StyledPageMainWrapper>
          <StyledPageInfoWrapper info>
            <StyledPageH1>{t("Mars.title")}</StyledPageH1>
            <StyledPageP>{t("Mars.firstText")}</StyledPageP>
            <StyledPageP>{t("Mars.secondText")}</StyledPageP>
            <StyledPageP>{t("Mars.thirdText")}</StyledPageP>
          </StyledPageInfoWrapper>

          <StyledPageInfoWrapper facts>
            <StyledPageH1>{t("Mars.factsTitle")}</StyledPageH1>
            <StyledPageUl>
              <StyledPageLi>{t("Mars.factsRadius")}</StyledPageLi>
              <StyledPageLi>{t("Mars.factsSize")}</StyledPageLi>
              <StyledPageLi>{t("Mars.factsSpeed")}</StyledPageLi>
              <StyledPageLi>{t("Mars.factsMoons")}</StyledPageLi>
            </StyledPageUl>
          </StyledPageInfoWrapper>
        </StyledPageMainWrapper>
        <StyledPageFooter>
          <StyledPageP footer>{t("Mars.source")}</StyledPageP>
        </StyledPageFooter>
      </StyledPageContainer>
    </StyledPageSection>
  );
};

export default MarsPage;

// import React from "react";

// import {
//   Button,
//   Paragraf,
//   Headder,
//   Seksjon,
//   Kilde,
//   Flex,
//   Text,
//   Liste,
// } from "./styles";

// const marsPage = () => {
//   return (
//     <Seksjon>
//       <div className='container mars__container'>
//         <article>
//           <Headder>Mars</Headder>

//           <Paragraf>
//             <Flex>
//               <Text>
//                 <p>
// Mars er den fjerde planeten regnet fra Sola. Den er den
// syvende største planeten i solsystemet og har litt over
// halvparten så stor omkrets som Jorda. Den er i likhetmed
// Merkur, Venus og Jorda en steinplanet.
//                   <br /> Et døgn på Mars varer 24,6 timer, ikke ulikt et døgn på
//                   Jorda (23,9 timer). <br />
//                   Et Mars-døgn kalles sol, som er en forkortelse for «solar day»
//                   (soldøgn).
//                   <br /> Mars kan ha vært mer jordlignende for 3,5 milliarder år
//                   siden. Formasjoner på overflaten tyder på at vann har rent der
//                   tidligere, mens i dag er overflaten tørrlagt.{" "}
//                 </p>
//               </Text>
//               <p>
//                 <Liste>
//                   <h4>Fakta om Mars</h4>
//                   <ul>
//                     <li>
//                       Gjennomsnittlig avstand fra Sola 227,9 millioner kilometer
//                     </li>
//                     <li>Banens eksentrisitet 0,093</li>
//                     <li>
//                       Banens helning i forhold til ekliptikken 1,85 grader
//                     </li>
//                     <li>Radius ved ekvator (Jorda = 1) 0,532</li>
//                     <li>Masse (Jorda = 1) 0,107</li>
//                     <li>Tyngdeakselerasjon på overflaten 3,71 m/s2</li>
//                     <li>
//                       Gjennomsnittlig overflatetemperatur cirka −55 grader
//                       celsius
//                     </li>
//                     <li>Siderisk omløpstid 1,881 år</li>
//                     <li>Rotasjonstid 24,623 timer</li>
//                     <li>Måner 2</li>
//                   </ul>
//                 </Liste>
//               </p>
//             </Flex>

// //             <Kilde>
//               // Aksnes, Kaare; Hammerstrøm, Maria: Mars i Store norske leksikon på
//               // snl.no. Hentet 11. oktober 2022 fra
//               <Button href='https://snl.no/Mars'>SNL</Button>
//             </Kilde>
//           </Paragraf>
//         </article>
//       </div>
//     </Seksjon>
//   );
// };

// export default marsPage;
