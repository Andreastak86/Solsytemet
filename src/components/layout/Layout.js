import { useState } from "react";
import FooterBar from "./components/footer";
import Nav from "./components/navbar";
import Sidebar from "./components/sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav toggle={toggle} />
      {children}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FooterBar />
    </>
  );
};

export default Layout;
