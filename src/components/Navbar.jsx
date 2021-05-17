import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import '../StyleSheets/NavBar.css'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link smooth={true} to="/" className="nav-logo">
           <em>PEC Forum</em> 
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <a
                href="https://pec-forum.herokuapp.com/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                PEC Forum 
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="home"
                offset={-90} 
                duration={1000}
                smooth={true}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="impact"
                offset={-40} 
                duration={1000}
                smooth={true}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                What we Do?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="feature"
                offset={-90}
                duration={1000}
                smooth={true}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="developer"
                offset={1090}
                duration={1000}
                smooth={true}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Developer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="faq"
                offset={-90} 
                duration={1000}
                smooth={true}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FAQs
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}>
              <MenuIcon style={{ fontSize: "30px", marginTop: "3px" }} />
            </i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
