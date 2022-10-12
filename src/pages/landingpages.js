import React from "react";
import Contact from "../components/contact";
import Mars from "./mars/index";
import Moon from "./moon/index";

const landingpages = () => {
  return (
    <>
      <Mars />
      <Moon />
      <Contact />
    </>
  );
};

export default landingpages;
