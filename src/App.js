import React from "react";
import Contact from "./components/contact";
import FooterBar from "./components/footer";
import SetupEksempel from "./components/i18eksempel.js/SetupEksempel";
import Nav from "./components/navbar";
import LandingPage from "./pages//LandingPage/index";


const App = () => {
  return (
    <>
      <Nav/>
      <LandingPage />
      <Contact />
      <SetupEksempel />
      <FooterBar />
    </>
  );
};

export default App;