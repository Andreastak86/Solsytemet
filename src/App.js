import React from "react";
import { 
  Routes, 
  Route, 
  HashRouter 
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import EarthPage from "./pages/planetPages/earthPage/EarthPage";
import MoonPage from "./pages/planetPages/moonPage/MoonPage";
import JupiterPage from "./pages/planetPages/jupiterPage/JupiterPage";
import MarsPage from "./pages/planetPages/marsPage/MarsPage";
import NeptunPage from "./pages/planetPages/neptunPage/NeptunPage";
import SaturnPage from "./pages/planetPages/saturnPage/SaturnPage";
import SunPage from "./pages/planetPages/sunPage/SunPage";
import VenusPage from "./pages/planetPages/venusPage/VenusPage";


const App = () => {
  return (
    <HashRouter>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage />} 
              />
            <Route 
              path="/sun" 
              element={<SunPage />} 
              />
              <Route 
                path="/earth" 
                element={<EarthPage />} 
                />
            <Route 
              path="/moon" 
              element={<MoonPage />} 
              />
            <Route 
              path="/mars" 
              element={<MarsPage />} 
              />
            <Route 
              path="/jupiter" 
              element={<JupiterPage />} 
              />
            <Route 
              path="/saturn" 
              element={<SaturnPage />}
              />
            <Route
              path="/neptun"
              element={<NeptunPage />}
              />
            <Route
              path="/venus"
              element={
                <VenusPage />
              }
              />
          </Routes>
        </Layout>
              </HashRouter>
  );
};

export default App;
