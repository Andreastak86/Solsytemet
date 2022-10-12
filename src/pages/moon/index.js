import React from "react";

import { Button, Paragraf, Headder, Seksjon, Kilde } from "./styles";

const index = () => {
  return (
    <Seksjon>
      <div className='container moon__container'>
        <article>
          <Headder>Månen</Headder>

          <Paragraf>
            Månen er Jordens eneste naturlige satellitt. Månen har gitt opphav
            til fellesbenevnelsen «måne» og er den femte største månen i
            solsystemet. Månen er synlig fra Jorden fordi den reflekterer lyset
            fra Sola. Den har såkalt bunden rotasjon, det vil si at den alltid
            vender samme side mot Jorden. Månens dannelse er et omstridt tema.
            Den hypotesen som har størst tilslutning i dag, sier at et stort
            objekt streifet Jorden i dens tidlige, fluide fase og rev med seg en
            tunge av gass og partikler, som siden dannet Månen.
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
