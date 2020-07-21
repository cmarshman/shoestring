import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Image from '../../images/Logos/vector/default-monochrome-black.svg'
import httpClient from '../../httpClient'

const NavBarSettings = (currentUser) => {

  const [isActive, setisActive] = useState(false);

  const location = useLocation();

  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser()
  })

  // Load the available token on pageload from local storage
  useEffect(() => {
    work()
  }, [])

  const logOut = () => {
    httpClient.logOut()
    setCurrentUserObj({ currentUser: null })

  }

  const work = () => {
    if (currentUser === null) {
      //<Redirect from='home' to='/'/>
      window.location.replace('/')
    }

  }

  return (
    <>
      <div>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="opening-nav">
          <div className="navbar-brand">
            <Link to="/home" className="navbar-item">
              <img src={Image} alt="logo" width="112" height="28" />
            </Link>

            <Link to="#"
              onClick={() => { setisActive(!isActive); }}
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
              <Link to="/home" className={location.pathname === "/home" ? "navbar-item is-active" : "navbar-item"}>
                My Profile
            </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/login" className="button is-light" id="text-theme" onClick={logOut}>
                    Logout
                </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />
        <br />
      </div>
    </>
  )
}

export default NavBarSettings;