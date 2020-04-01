
import React, { Component, useState, useEffect } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Image from '../../images/Logos/vector/default-monochrome-black.svg'
import httpClient from '../../httpClient'
//import Navbar from '../../components/navbar'
//import Login from '../../pages/'
const NavBarAuth = (props, currentUser) => {


  const [isActive, setisActive] = React.useState(false);

  const location = useLocation();


  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser()
  
})
 
// Load the available token on pageload from local storage
// useEffect(() => {
//   //logOut()
     
// }, [])

  const logOut =() =>{
		httpClient.logOut()
    setCurrentUserObj({ currentUser: null })
     
	}

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation" id="opening-nav">
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
            <Link to="/home" className={location.pathname === "/home" ? "navbar-item is-active" : "navbar-item"}>
              My Profile
            </Link>

            <Link to="/findafriend" className={location.pathname === "/findafriend" ? "navbar-item is-active" : "navbar-item"}>
              Friends
            </Link>

            <Link to="/transfermoney" className={location.pathname === "/transfermoney" ? "navbar-item is-active" : "navbar-item"}>
              Transfer Money
            </Link>

            <Link to="/mywallet" className={location.pathname === "/mywallet" ? "navbar-item is-active" : "navbar-item"}>
              My Wallet
            </Link>

            <Link to="/currencyconverter" className={location.pathname === "/currencyconverter" ? "navbar-item is-active" : "navbar-item"}>
              Currency Converter
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-light" id="text-theme" onClick={logOut}>

                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <br/>
      <br/>
    </div>
  )
}

export default NavBarAuth;