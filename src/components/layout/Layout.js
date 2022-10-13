import FooterBar from "./components/footer"
import Nav from "./components/navbar"

const Layout = ({ children }) => {
    return(
      <>
      <Nav />
        {children}
      <FooterBar/>
      </>
    )
  }

export default Layout;