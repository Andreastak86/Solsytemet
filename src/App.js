import React from "react";
import { HashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <HashRouter>
      <LandingPage />
    </HashRouter>
  );
};

export default App;
