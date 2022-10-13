import React from "react";
import Contact from "../components/contact";
import Mars from "./mars/index";
import Moon from "./moon/index";
import Uranus from "./uranus/index";

const landingpages = () => {
  return (
    <>
      <Mars />
      <Moon />
      <Uranus />
      <Contact />
    </>
  );
};

export default landingpages;
