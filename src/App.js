import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages//LandingPage/index";
import Sun from "./pages/sun";
import Earth from "./pages/earth";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiterPage";
import Saturn from "./pages/saturnPage";
import Moon from "./pages/moon";
import Neptun from "./pages/neptunPage";
import Venus from "./pages/venusPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/moon" element={<Moon />} />
            <Route 
              path="/Solsytemet/" 
              element={<LandingPage />} />
            <Route 
              path="/sun" 
              element={<Sun />} 
            />
              <Route 
                path="/earth" 
                element={<Earth />} 
              />
            <Route 
              path="/mars" 
              element={<Mars />} 
            />
            <Route 
              path="/jupiter" 
              element={<Jupiter />} 
            />
            <Route 
              path="/saturn" 
              element={<Saturn />} 
            />
            <Route
            path="/neptun"
            element={
              <Neptun />
            }
            />
            <Route
              path="/venus"
              element={
                <Venus />
              }
            />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
};

export default App;
