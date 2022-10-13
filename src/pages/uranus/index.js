import React from "react";

import { Button, Paragraf, Headder, Seksjon, Kilde } from "./styles";

const index = () => {
  return (
    <Seksjon>
      <div className='container uranus__container'>
        <article>
          <Headder>Uranus</Headder>

          <Paragraf>
            UTTALE: urˈanus Uranus er den sjuende av planetene regnet fra Sola,
            og den tredje største planeten i solsystemet. Uranus er i likhet med
            Jupiter, Saturn og Neptun en gassplanet, nærmere bestemt en
            iskjempe. Uranus bruker 84,02 år på å fullføre et omløp rundt Sola.
            Den gjennomsnittlige avstanden fra Sola er 2871 millioner kilometer,
            som er 19 ganger Jordas avstand. Uranus ble, i likhet med de andre
            planetene i solsystemet, dannet for rundt 4,5 milliarder år siden,
            like etter at Sola hadde blitt dannet.
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

export default index;
