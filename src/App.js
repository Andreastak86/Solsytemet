import React from "react";
import FooterBar from "./components/footer";
import Nav from "./components/navbar";
import LandingPage from "./pages//LandingPage/index";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Sun from "./pages/sun";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sun" element={<Sun />} />
        </Routes>
        <FooterBar />
      </BrowserRouter>
    </>
  );
};

export default App;