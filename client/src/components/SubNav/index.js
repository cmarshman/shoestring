import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css';

function SubNav() {
    
    const location = useLocation();
    
    return (
        <>
        <div className="tile is-ancestor">
        <div className="tile is vertical is-10 is-clearfix columns is-centered" id="tile">
        <div className="column is-one-fifth">
                <Link to="/home" className={location.pathname === "/home" ? "button is-dark is-medium" : "button is-medium"} id="button">My Profile</Link>
            </div>
            <div className="column">
                <Link to="/findafriend" className={location.pathname === "/findafriend" ? "button is-dark is-medium" : "button is-medium"} id="button">Find a Friend</Link>
            </div>
            <div className="column">
                <Link to="/transfermoney" className={location.pathname === "/transfermoney" ? "button is-dark is-medium" : "button is-medium"} id="button">Transfer Money</Link>
            </div>
            <div className="column">
                <Link to="/mywallet" className={location.pathname === "/mywallet" ? "button is-dark is-medium" : "button is-medium"} id="button">My Wallet</Link>
            </div>
            <div className="column">   
                <Link to="/currencyconverter" className={location.pathname === "/currencyconverter" ? "button is-dark is-medium" : "button is-medium"} id="button">Currency Converter</Link>
            </div>
        </div>
        </div>
        </>
    )
}
    
export default SubNav;