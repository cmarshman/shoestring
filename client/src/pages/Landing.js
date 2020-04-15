import React, { useState, useEffect } from "react";
import httpClient from '../httpClient';
import './design/Landing.css';
import FriendCard from './../components/FriendCard';
import Plaid from './../components/plaidLink';
import NavBarAuth from '../components/NavBarAuth';
import UserNameCard from '../components/UserNameCard';
import AddImage from './../components/AddImage';
import Payments from './../components/Payments';
// import Modal from '../components/Modal';
 

function Landing() {
 
    const [currentUserObj, setCurrentUserObj] = useState({
         currentUser: httpClient.getCurrentUser()
    })
 

 // Render the  all  the  pages on the landing pages
    return (
        <>
        {(currentUserObj.currentUser !==null) ?(
            <div>
              <NavBarAuth/> 
                  <div className="outerTile">
                      <div className="is-clearfix columns is-centered">
                      <div className="tile is-9 container column is-fluid">
                          <div className="tile is-vertical is-parent" >
                              <div className="tile is-child box has-text-centered" >
                                  <div className="is-centered" >
                                  <UserNameCard/>
                                   <AddImage />
                                  <br />
                                  <Plaid />
                                  <p id="funds">Funds Available: $100</p>
                                  <p id="member">Member Since: April 2019</p>
                                  </div>
                              </div>
                              <div className="tile is-child box is-fullwidth">
                                  {/* <p className="title" id="paymentList">Payments</p>
                                  <p>Lisa paid Arnold for Pizza</p>
                                  <p>Jeff paid Jesus for rent</p> */}
                                  <Payments/>
                              </div>
                            </div>
                      </div>
                      <FriendCard />
                  </div>
              </div>
         </div>
             
        ): window.location.replace("/")}
        
</>
)

}
export default Landing;
 

