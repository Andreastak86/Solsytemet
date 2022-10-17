import React from "react";

import {
  Seksjon,
  Headder,
  Paragraf,
  Flex,
  Text,
  Liste,
  Kilde,
  Button,
} from "./styles";

const merkur = () => {
  return (
    <Seksjon>
      <div className='container merkur__container'>
        <article>
          <Headder>Merkur</Headder>

          <Paragraf>
            <Flex>
              <Text>
                <p>
                  Merkur er den innerste og minste planeten i solsystemet. Den
                  er bare litt større enn Månen, og er i likhet med Venus, Jorda
                  og Mars en steinplanet.
                  <br />
                  Planeten er gråfarget og tildekket av kratre, og ligner dermed
                  på Månen i utseende. Det er observert tegn til is i kratre i
                  polområdene som aldri blir truffet av sollys.
                  <br />
                  Overflaten er tildekket av små og store nedslagskratere. Det
                  største krateret, Caloris, er 1550 kilometer i diameter. På
                  motstående side av planeten finnes et mønster av ringer som
                  trolig er dannet av sjokkbølger etter nedslaget som dannet
                  Caloris-krateret. På overflaten finnes også vulkaner, men det
                  er ikke observert aktive vulkaner.
                  <br />
                  Det første romfartøyet som besøkte Merkur var Mariner 10 som
                  ankom planeten i 1974 og fotograferte nesten halvparten av
                  planetens overflate med oppløsning ned til 100 meter.
                </p>
              </Text>
              <p>
                <Liste>
                  <h4>Fakta om Merkur</h4>
                  <ul>
                    <li>
                      Gjennomsnittlig avstand fra Sola 57,91 millioner kilometer
                    </li>
                    <li>Radius ved ekvator (Jorda = 1) 0,382</li>
                    <li>
                      Gjennomsnittlig overflatetemperatur cirka 167 grader
                      celsius
                    </li>
                    <li>Rotasjonstid 58,65 dager</li>
                    <li>
                      Gjennomsnittlig tetthet 5,43 gram per kubikkcentimeter
                    </li>
                    <li>Siderisk omløpstid 87,97 dager</li>
                  </ul>
                </Liste>
              </p>
            </Flex>

            <Kilde>
              Aksnes, Kaare; Hammerstrøm, Maria: Merkur i Store norske leksikon
              på snl.no. Hentet 14. oktober 2022 fra
              <Button href='https://snl.no/Merkur'>SNL</Button>
            </Kilde>
          </Paragraf>
        </article>
      </div>
    </Seksjon>
  );
};

export default merkur;
