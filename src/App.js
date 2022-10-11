import React from "react";
import LandingPage from "./pages//LandingPage/index";
import Contact from "./components/contact";
import SetupEksempel from "./components/i18eksempel.js/SetupEksempel";

const App = () => {
  return (
    <>
      <LandingPage />
      <Contact />
      <SetupEksempel />
    </>
  );
};

export default App;
