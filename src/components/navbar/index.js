import React from "react";
import { NavBar } from "./styles";
import "./test.css"

function Nav() {
  return (
    <NavBar>
      <h1>
        Solsytemet
      </h1>
      <ul>
        <li>
          Forsiden
        </li>
        <li>
          Vårt solsystem
        </li>
        <li>
          Planeter
        </li>
        <li>
          Kontakt ossss
        </li>
      </ul>
    </NavBar>
  )
}

export default Nav;