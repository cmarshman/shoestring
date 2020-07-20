import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Image from '../../images/Logos/vector/default-monochrome-black.svg'


const Navbar = () => {

const [isActive, setisActive] = React.useState(false);

const location = useLocation();

  return (
    <div>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="opening-nav">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={Image} alt="logo" width="112" height="28"/>
          </Link>

          <Link to="#" 
          onClick={() => {setisActive(!isActive);}}
          role="button" 
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="/" className={location.pathname === "/" ? "navbar-item is-active" : "navbar-item"}>
              Home
            </Link>

            <Link to="/about" className={location.pathname === "/about" ? "navbar-item is-active" : "navbar-item"}>
              About
            </Link>

            <Link to="/contact" className={location.pathname === "/contact" ? "navbar-item is-active" : "navbar-item"}>
              Contact
            </Link>

            <div className="navbar-item has-dropdown is-hoverable" >
              <Link to="#" className="navbar-link" id="navitems">
                More
              </Link>

              <div className="navbar-dropdown">
                <hr className="navbar-divider" />
                <Link to="/report-an-issue" className={location.pathname === "/report-an-issue" ? "navbar-item is-active" : "navbar-item"}>
                  Report an issue
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/sign-up" className="button is-light" id="text-theme">
                  Sign up
                  </Link>
                <Link to="/login" className="button is-light" id="text-theme">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br/>
      <br/>
    </div>
  );
}


export default Navbar;