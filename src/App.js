import React from "react";
import { 
  Routes, 
  Route, 
  HashRouter 
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages//LandingPage/index";
import Sun from "./pages/sun";
import Earth from "./pages/earth";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiterPage";
import Saturn from "./pages/saturnPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage />} 
            />
            {/* <Route path="/Solsytemet/" element={<LandingPage />} /> */}
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
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
};

export default App;
