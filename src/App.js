import React from "react";
import FooterBar from "./components/footer";
import Nav from "./components/navbar";
import LandingPage from "./pages/LandingPage/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sun from "./pages/sun";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiterPage";
import Saturn from "./pages/saturnPage";
import Måne from "./pages/moon/";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/Solsytemet' element={<LandingPage />} />
          <Route path='/Solsytemet/sun' element={<Sun />} />
          <Route path='/Solsytemet/mars' element={<Mars />} />
          <Route path='/Solsytemet/jupiter' element={<Jupiter />} />
          <Route path='/Solsytemet/saturn' element={<Saturn />} />
          <Route path='/Solsytemet/moon' element={<Måne />} />
        </Routes>

        <FooterBar />
      </BrowserRouter>
    </>
  );
};

export default App;
