import React from "react";
import FooterBar from "./components/footer";
import Nav from "./components/navbar";
import LandingPage from "./pages/LandingPage/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sun from "./pages/sun";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiterPage";
import Saturn from "./pages/saturnPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sun" element={<Sun />} />
          <Route path="mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
        </Routes>
        <LandingPage />
        <FooterBar />
      </BrowserRouter>
    </>
  );
};

export default App;
