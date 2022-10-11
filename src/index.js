
import React from "react";
import ReactDOM from "react-dom/client";
import "./i18next/i18n"
import App from "./App";
import { GlobalStyle } from "./GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
