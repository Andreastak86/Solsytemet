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

const index = () => {
  return (
    <Seksjon>
      <div className='container moon__container'>
        <article>
          <Headder>Månen</Headder>

          <Paragraf>
            <Flex>
              <Text>
                <p>
                  Månen er Jordens eneste naturlige satellitt. Månen har gitt
                  opphav til fellesbenevnelsen «måne» og er den femte største
                  månen i solsystemet.
                  <br /> Månen er synlig fra Jorden fordi den reflekterer lyset
                  fra Sola. Den har såkalt bunden rotasjon, det vil si at den
                  alltid vender samme side mot Jorden.
                  <br /> Månens dannelse er et omstridt tema. Den hypotesen som
                  har størst tilslutning i dag, sier at et stort objekt streifet
                  Jorden i dens tidlige, fluide fase og rev med seg en tunge av
                  gass og partikler, som siden dannet Månen.
                </p>
              </Text>
              <p>
                <Liste>
                  <h4>Fakta om Månen</h4>
                  <ul>
                    <li>Synodisk omløpstid/rotasjonstid 29,53 døgn</li>
                    <li>Siderisk omløpstid/rotasjonstid 27,32 døgn</li>
                    <li>Overflatetemp. ved ekvator minimum –170 °C</li>
                    <li>Midlere densitet 3,34 g/cm³</li>
                    <li>Middelavstand fra Jorden 384 400 kilometer</li>
                    <li>Masse (Jorden = 1) 0,0123</li>
                    <li>maksimum 100 °C</li>
                    <li>Ekvatorradius 1738 kilometer</li>
                    <li>Banens eksentrisitet 0,055</li>
                    <li>Banens ekliptikkhelning 5° 8' 43''</li>
                  </ul>
                </Liste>
              </p>
            </Flex>

            <Kilde>
              Aksnes, Kaare; Hammerstrøm, Maria: Månen i Store norske leksikon
              på snl.no. Hentet 11. oktober 2022 fra
              <Button href='https://snl.no/M%C3%A5nen'>SNL</Button>
            </Kilde>
          </Paragraf>
        </article>
      </div>
    </Seksjon>
  );
};

export default index;
