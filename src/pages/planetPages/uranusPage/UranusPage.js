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

const UranusPage = () => {
  return (
    <Seksjon>
      <div className='container uranus__container'>
        <article>
          <Headder>Uranus</Headder>

          <Paragraf>
            <Flex>
              <Text>
                <p>
                  UTTALE: urˈanus Uranus er den sjuende av planetene regnet fra
                  Sola, og den tredje største planeten i solsystemet.
                  <br /> Uranus er i likhet med Jupiter, Saturn og Neptun en
                  gassplanet, nærmere bestemt en iskjempe.
                  <br /> Uranus bruker 84,02 år på å fullføre et omløp rundt
                  Sola. Den gjennomsnittlige avstanden fra Sola er 2871
                  millioner kilometer, som er 19 ganger Jordas avstand.
                  <br />
                  Uranus ble, i likhet med de andre planetene i solsystemet,
                  dannet for rundt 4,5 milliarder år siden, like etter at Sola
                  hadde blitt dannet.
                </p>
              </Text>
              <p>
                <Liste>
                  <h4>Fakta om Uranus</h4>
                  <ul>
                    <li>
                      Gjennomsnittlig avstand fra Sola 2871 millioner kilometer
                    </li>
                    <li>Banens eksentrisitet 0,046</li>
                    <li>
                      Banens helning i forhold til ekliptikken 0,77 grader
                    </li>
                    <li>Radius ved ekvator (Jorda = 1) 4,007</li>
                    <li>Masse (Jorda = 1) 14,4</li>
                    <li>Tyngdeakselerasjon på overflaten* 8,87 m/s2</li>
                    <li>
                      Gjennomsnittlig tetthet 1,29 gram per kubikkcentimeter
                    </li>
                    <li>
                      Gjennomsnittlig overflatetemperatur cirka –210 grader
                      celsius
                    </li>
                    <li>Rotasjonstid 17,24 timer</li>
                    <li>Aksehelning 98 grader</li>
                  </ul>
                </Liste>
              </p>
            </Flex>

            <Kilde>
              Ringnes, Truls; Aksnes, Kaare; Hammerstrøm, Maria: Uranus i Store
              norske leksikon på snl.no. Hentet 11. oktober 2022 fra
              <Button href='https://snl.no/Uranus'>SNL</Button>
            </Kilde>
          </Paragraf>
        </article>
      </div>
    </Seksjon>
  );
};

export default UranusPage;
