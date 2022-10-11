import React from "react";
import Mars from "./img/mars.jpg";

const index = () => {
  return (
    <section id='Mars'>
      <div className='container mars__container'>
        <article>
          <h1>Mars</h1>
          <div className='mars-img'>
            <img src={Mars} alt='Planet Mars' />
          </div>
          <p>
            Mars er den fjerde planeten regnet fra Sola. Den er den syvende
            største planeten i solsystemet og har litt over halvparten så stor
            omkrets som Jorda. Den er i likhet med Merkur, Venus og Jorda en
            steinplanet. Et døgn på Mars varer 24,6 timer, ikke ulikt et døgn på
            Jorda (23,9 timer). Et Mars-døgn kalles sol, som er en forkortelse
            for «solar day» (soldøgn). Mars kan ha vært mer jordlignende for 3,5
            milliarder år siden. Formasjoner på overflaten tyder på at vann har
            rent der tidligere, mens i dag er overflaten tørrlagt.
            <span className='ref'>
              Aksnes, Kaare; Hammerstrøm, Maria: Mars i Store norske leksikon på
              snl.no. Hentet 11. oktober 2022 fra{" "}
              <a href='https://snl.no/Mars'>SNL</a>
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default index;
