import React from "react";
// import Contact from "./components/contact";
import FooterBar from "./components/footer";
// import SetupEksempel from "./components/i18eksempel.js/SetupEksempel";
import Nav from "./components/navbar";
import LandingPage from "./pages//LandingPage/index";
import {
  // HashRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  // NavLink
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <FooterBar />
      </BrowserRouter>
    </>
  );
};

export default App;