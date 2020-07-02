import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Image from '../../images/Logos/vector/default-monochrome-black.svg'
import httpAdmin from '../../httpAdmin'

const NavBarAdmin = (currentUser) => {

  const [isActive, setisActive] = React.useState(false);

  const location = useLocation();

  const [setCurrentUserObj] = useState({
    currentUser: httpAdmin.getCurrentUser()
})
 
// Load the available token on pageload from local storage
useEffect(() => {
  work()
}, [])


  const logOut =() =>{
		httpAdmin.logOut()
    setCurrentUserObj({ currentUser: null }) 
    
	}
  
  const work = () =>{
    if(currentUser===null){
    //<Redirect from='home' to='/'/>
    window.location.replace('/')
    }
     
  }

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation" id="opening-nav">
        <div className="navbar-brand">
          <Link to="/admin-summary" className="navbar-item">
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
            <Link to="/admin-summary" className={location.pathname === "/admin-summary" ? "navbar-item is-active" : "navbar-item"}>
              Summary
            </Link>

            <Link to="/transaction-history" className={location.pathname === "/transaction-history" ? "navbar-item is-active" : "navbar-item"}>
              Transactions
            </Link>

            <Link to="/all-users" className={location.pathname === "/all-users" ? "navbar-item is-active" : "navbar-item"}>
              Users
            </Link>

            <Link to="/new-users-last-month" className={location.pathname === "/new-users-last-month" ? "navbar-item is-active" : "navbar-item"}>
              New Users
            </Link>

            <Link to="/total-income" className={location.pathname === "/total-income" ? "navbar-item is-active" : "navbar-item"}>
              Income
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

export default NavBarAdmin;