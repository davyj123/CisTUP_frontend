import { AppLinks, Applink, Apptitle, Navbar } from './Elements'
import { Link } from 'react-router-dom'

function Nav() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
      };
  return (
    <Navbar>
        <Apptitle>Object Detector React & Flask App</Apptitle>
        <AppLinks>
          <Applink>
            <Link to={"/"} style={linkStyle}>
              Home
            </Link>
          </Applink>
          <Applink>
            <Link to={"images"} style={linkStyle}>
              Images
            </Link>
          </Applink>
        </AppLinks>
      </Navbar>
  )
}

export default Nav